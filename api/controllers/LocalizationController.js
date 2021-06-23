
const Localization = require('../models/LocalizationModel')
exports.AddLocalizationController = (req, res) => {
    const {
        ip,
        country_code,
        country_name,
        region_code,
        city,
        time_zone
    } = req.body
    try {
        const isCityExist = Localization.findOne({ city })
        if (isCityExist) {
           return Localization.findOneAndUpdate({ city }, { counter: counter + 1 }, { new: true })
        }
        const newLocalization = new Localization({
            ip,
            country_code,
            country_name,
            region_code,
            city,
            time_zone
        })
        newLocalization.save((error, locale) => {
            if (error) return res.status(400).json({ errors: error })
            return res.status(200).json({locale})
        })
    } catch (error) {

    }

}