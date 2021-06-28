const Banners = require('../models/bannerModel')
exports.addBannerController = async (req, res, next) => {
    // let banners = [];
    // if (req.files.length > 0) {
    //     banners = req.files.map(file => {
    //         return { img: file.filename }
    //     })
    // }
    const banner = new Banners({
        banners:req.file.filename
    })
    banner.save((error, banner) => {
        if (error) return res.status(400).json({ error })
        if (banner) {
            res.status(201).json({ banner })
        }
    })
}


exports.getBannersController = (req, res, next) => {
    Banners.find({})
        .exec((error, banners) => {
            if (error) return res.status(400).json({ errors: error })
            if (banners) {
                res.status(200).json({ banners })
            }
        })
}