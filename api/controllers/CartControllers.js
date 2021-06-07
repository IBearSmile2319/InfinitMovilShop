const Cart = require('../models/cartModel')

// function runUpdate(condition, updateData) {
//     return new Promise((resolve, reject) => {
//         //you update code here

//         Cart.findOneAndUpdate(condition, updateData, { upsert: true })
//             .then((result) => resolve())
//             .catch((err) => reject(err));
//     });
// }

exports.addItemToCart = (req, res, next) => {
    Cart.findOne({ user: req.user._id }).exec((error, cart) => {
        if (error) return res.status(400).json({ errors: error })
        if (cart) {
            const product = req.body.cartItems.product
            const item = cart.cartItems.find(c => c.product == product)
            let condition, update;
            if (item) {
                condition = { user: req.user._id, "cartItems.product": product };
                update = {
                    $set: {
                        "cartItems": {
                            ...req.body.cartItems,
                            quantity: item.quantity + req.body.cartItems.quantity
                        }
                    }
                }

            } else {
                condition = { user: req.user._id }
                update = {
                    $push: {
                        "cartItems": req.body.cartItems
                    }
                }
            }
            Cart.findOneAndUpdate(condition, update)
            .exec((error, _cart) => {
                if (error) return res.status(400).json({ errors: error })
                if (_cart) {
                    return res.status(201).json({ cart: _cart })
                }
            })
            // res.status(200).json({message:cart})
        } else {
            const cart = new Cart({
                user: req.user._id,
                cartItems: [req.body.cartItems]
            })

            cart.save((error, cart) => {
                if (error) return res.status(400).json({ errors: error })
                if (cart) {
                    return res.status(201).json({ cart })
                }
            })
        }
    })


    // const { _id } = req.user
    // Cart.findOne({ user: _id }).exec((error, cart) => {
    //     if (error) return res.status(400).json({ errors: error })
    //     if (cart) {
    //         // if cart already exists then update cart by quantity
    //         let promiseArray = [];

    //         req.body.cartItems.forEach((cartItem) => {
    //             const product = cartItem.product;
    //             const item = cart.cartItems.find((c) => c.product == product);
    //             let condition, update;
    //             if (item) {
    //                 condition = { user: _id, "cartItems.product": product };
    //                 update = {
    //                     $set: {
    //                         "cartItems.$": cartItem,
    //                     },
    //                 };
    //             } else {
    //                 condition = { user: _id };
    //                 update = {
    //                     $push: {
    //                         cartItems: cartItem,
    //                     },
    //                 };
    //             }
    //             promiseArray.push(runUpdate(condition, update));
    //         })
    //         Promise.all(promiseArray)
    //             .then((response) => res.status(201).json({ response }))
    //             .catch((error) => res.status(400).json({ error }));

    //     } else {
    //         //id cart not exist then create a new cart
    //         const cart = new Cart({
    //             user: _id,
    //             cartItems,
    //         })
    //         cart.save((error, cart) => {
    //             if (error) return res.status(400).json({ errors: error })
    //             if (cart) {
    //                 return res.status(200).json({ cart })
    //             }
    //         })
    //     }
    // })

}