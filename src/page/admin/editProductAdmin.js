import { apiPut, getApi } from "../../api";
import footer from "../../components/footer";
import Header from "../../components/header";
import navBar from "../../components/navbar";

const editProductAdmin = {
  async render(id) {
    const data = await getApi(`/books/${id.data.id}`);
    return `
      ${Header.render()}
      ${navBar.render()}
         <div class="max-w-[1240px] m-auto w-full flex justify-start my-[30px]">
            <div class="flex  flex-col w-full max-w-[600px]">
            <h3 class="text-[20px] capitalize font-normal">tên sản phẩm: </h3>
                <input id="name" class="py-[10px] pl-3 w-full border-[1px] max-w-[500px] border-[#333]" type="text" value="${
                  data.name
                }">
                <button class="max-w-[200px] mt-[20px] capitalize bg-primary-blue text-[16px] text-[#fff] py-[8px] px-[20px]">cập nhật sản phẩm</button>
            </div>
            <div class="flex max-w-[400px] flex-wrap ">
                ${data.images
                  .map(
                    (image) => `
                  <img class=" mt-[10px] mr-[5px] max-w-[100px]" src="${image.base_url}" alt="">
                `
                  )
                  .join("")}
            </div>
         </div>
         ${footer.render()}
        `;
  },
  async afterRender(id) {
    const idBook = id.data.id;
    const newData = await getApi(`/books/${idBook}`);
    const button = document.querySelector("button");
    const nameElement = document.querySelector("#name");

    button.addEventListener("click", function () {
      newData.name = nameElement.value;
      apiPut(`/books/${idBook}`, newData)
        .then((res) => alert("Cập nhật data thành công"))
        .catch(console.log);
    });
  },
};

export default editProductAdmin;
