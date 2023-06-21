const {validationResult} = require("express-validator");

const checkFields = (req, res, next) => {
    const errorsOccurred = validationResult(req);
    if (!errorsOccurred.isEmpty()){
        return res.status(400).json({
            ok:false,
            errors: errorsOccurred.array()
        });
    }else{
        next();
    }
}

module.exports = checkFields;