const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req?.roles) return res.sendStatus(401);
        const rolesArray = [...allowedRoles];
        console.log(rolesArray);
        console.log(req.roles);
        const result = req.roles.map(role => rolesArray.includes(role)).find(val => val === true);
        // will bring true or false for the roles when it maps over the roles sent over the jwt, and compare them 
        if (!result) return res.sendStatus(401);
        next();
    }
}

module.exports = verifyRoles