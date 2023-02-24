/* Response to /products route */ module.exports = (req, res) => {
  /* DATA */ res.json({
    professionalName: "Bob",
    base64Image: "asd",
    nameLink: { firstName: "", url: "https://linkedin.com" },
    primaryDescription: "Primary Description",
    workDescription1: "Plumber",
    workDescription2: "Carpenter",
    linkTitleText: "Hello",
    linkedInLink: { text: "Linkedin", link: "https://linkedin.com" },
    githubLink: { text: "GitHub", link: "https://github.com" },
  });
};
