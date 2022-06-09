import Header from "../components/header";
import navBar from "../components/navbar";
import footer from "../components/footer";
const homePage = {
  render() {
    return `
       ${Header.render()}
       ${navBar.render()}
       ${footer.render()}
        `;
  },
};

export default homePage;
