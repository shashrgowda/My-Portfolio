module.exports.index = (req,res) => {

    console.log(req.session);
    

    res.render('index', {
        title: "Home - Shashank Gowda",
        navHome: true
    });
}

module.exports.projects = (req,res) => {
    res.render('projectList', {
        title: "Projects",
        navProject: true
    });
}

module.exports.blogs = (req,res) => {
    res.render('blog', {
        title: "Blogs",
        navBlog: true
    });
}

module.exports.projectList = (req,res) => {
    res.render('projectDetail', {
        title: "Projects List"
    });
}

module.exports.contact = (req,res) => {
    res.render('contactUs', {
        title: "Contact Us",
        navContact: true
    });
}

module.exports.doContact = (req,res) => {
    let body = req.body;
    console.log(body);

    res.status(201).json({
        message: "Thank you. We'll get in touch shortly"
    });
}

module.exports.signIn = (req,res) => {
    res.render('signIn', {
        title: "Sign In",
        layout: 'signin-layout',
        navSignIn: true
    });
}

module.exports.signUp = (req,res) => {
    res.render('signUp', {
        title: "Sign Up",
        layout: 'signin-layout',
        navSignIn: true
    });
}

module.exports.doSignUp = (req,res) => {
    let body = req.body;
    console.log(body);

    res.redirect('/sign-in');
}

module.exports.admin = (req,res) => {
    res.render('admin', {
        title: "Admin"
    });
}

const users = [
    {
        name: 'Shash',
        email: 'shashankr6@gmail.com',
        password: 'shash'
    },
    {
        name: 'Test',
        email: 'test@gmail.com',
        password: 'test'
    }
]

module.exports.doSignIn = (req,res) => {
    let body = req.body;
    console.log(body)
    let user = users.filter((ele) => body.email == ele.email);

    console.log(user);

    if(user.length > 0) {
        if(user[0].password == body.password) {

            req.session.isLoggedIn = true;
            req.session.user = user[0];
            res.redirect('/admin');
        } else {
            res.render('signIn', {
                title: 'Sign In',
                layout: 'signin-layout',
                error: true,
                message: 'Incorrect Password'
            })
        }
    } else {
        res.render('signIn', {
            title: 'Sign In',
            layout: 'signin-layout',
            error: true,
            message: 'User not found'
        })
    }
    

    // res.redirect('/admin');
}