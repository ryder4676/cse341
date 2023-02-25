/* Response to /products route */
module.exports = (req, res) => {
  /* DATA */
  // Respond to the request with a JSON object containing the data required by the frontend
  res.json({
    professionalName: "Bob", // The name of the professional
    base64Image: "asd", // The base64-encoded image of the professional
    nameLink: { firstName: "", url: "https://linkedin.com" }, // An object containing the professional"s first name and a link to their LinkedIn profile
    primaryDescription: "Primary Description", // The professional"s primary description
    workDescription1: "Plumber", // The professional"s first work description
    workDescription2: "Carpenter", // The professional"s second work description
    linkTitleText: "Hello", // The title text for the professional"s links
    linkedInLink: { text: "Linkedin", link: "https://linkedin.com" }, // An object containing the text and link for the professional"s LinkedIn profile link
    githubLink: { text: "GitHub", link: "https://github.com" }, // An object containing the text and link for the professional"s GitHub link
  });
};
