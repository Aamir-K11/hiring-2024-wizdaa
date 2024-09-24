export default function checkPermissions(permissions) {

    return (req, res, next) => {
        const requestPermissions = req.get('x-permissions').split(',');

        if(requestPermissions.length == 0) {
             return res.status(403).send('Permissions header missing');
        }

        console.log(requestPermissions);

        const isAllowed = requestPermissions.filter(p => permissions.includes(p));


        if(isAllowed.length == 0) {
            return res.status(403).send('Forbidden');
        }

        next();
        
    }

}