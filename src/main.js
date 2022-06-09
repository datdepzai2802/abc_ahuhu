import Navigo from "navigo";
const router = new Navigo("/");
//import page
import homePage from "./page/homePage";
import productPage from "./page/productPage";
import aboutPage from "./page/about";
import detalProduct from "./page/detalProduct";
// import admin
import ProdutcAdmin from "./page/admin/ProductAdmin";
import editProductAdmin from "./page/admin/editProductAdmin";
//style css
import "./style.css";

async function print(page, id) {
  if (app) {
    app.innerHTML = await page.render(id);
  }
  if (page.afterRender) page.afterRender(id);
}

router.on({
  "/": () => print(homePage),
  "/products": () => print(productPage),
  "/about": () => print(aboutPage),
  "admin/product": () => print(ProdutcAdmin),
  "products/editproduct/:id": (id) => print(editProductAdmin, id),
  "/products/:id": (id) => print(detalProduct, id),
  "/products/:id": (id) => print(detalProduct, id),
});
router.resolve();
