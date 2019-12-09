module.exports.index = (req,res) => {
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