import { getApi } from "../../api/";
import footer from "../../components/footer";
import Header from "../../components/header";
import navBar from "../../components/navbar";

const ProdutcAdmin = {
  async render() {
    const data = await getApi("/books");
    return `
        ${Header.render()}
        ${navBar.render()}
        <section class="max-w-[1240px] m-auto">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                 stt
                            </th>
                            <th scope="col" class="px-6 py-3">
                                tên
                            </th>
                            <th scope="col" class="px-6 py-3">
                                giá
                            </th>
                            <th scope="col" class="px-6 py-3 text-center">
                                ảnh
                            </th>
                            <th scope="col" class="px-6 py-3 text-center">
                                tác giả
                            </th>
                            <th scope="col" class="px-6 py-3 text-center">
                                @
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                            ${data
                              .map(
                                (item, index) => `
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        ${item.id}
                                    </th>
                                    <td class="px-6 py-4 max-w-[400px]">
                                        <a class="hover:text-primary-blue" href="/products/editproduct/${
                                          item.id
                                        }" data-navigo>${item.name}</a>
                                    </td>
                                    <td class="px-4 py-4">
                                        ${item.list_price}
                                    </td>
                                    <td class="px-6 py-4 flex max-w-[400px] flex-wrap">
                                        ${item.images
                                          .map(
                                            (img) =>
                                              `<img class="w-[50px] mr-[10px] mt-[10px]" src="${img.base_url}" >`
                                          )
                                          .join(
                                            ""
                                          )}                                
                                    </td>
                                    <td class="px-6 py-4 text-center">
                                    ${item.authors ? item.authors[0].name : ""}
                                    </td>
                                    <td class="px-4 py-4 flex">
                                        <a href="/products/editproduct/${
                                          item.id
                                        }" data-navigo class="px-[15px] py-[8px] bg-blue-600 text-[#fff] bg-primary-blue rounded-lg">Sửa</a>
                                        <button data-id="${
                                          item.id
                                        }" class="px-[15px] py-[8px] bg-red-600 text-[#fff] bg-red-button rounded-lg" id="detele-btn">Xóa</button>
                                    </td>
                                </tr>
                            `
                              )
                              .join("")}
                        
                        
                    </tbody>
                </table>
            </div>
        </section>
        ${footer.render()}    
        `;
  },
  afterRender() {
    const deleteBtn = document.querySelectorAll("#detele-btn");
    deleteBtn.forEach((btn) =>
      btn.addEventListener("click", async function () {
        const idDelete = this.getAttribute("data-id");
        const confirm = window.confirm("Bạn có chắc chắn xóa không?");
        if (confirm) {
          const data = await (
            await fetch(`http://localhost:4000/books/${idDelete}`, {
              method: "DELETE",
            })
          ).json();
          if (data) {
            console.log("delete thành công");
          }
        }
      })
    );
  },
};

export default ProdutcAdmin;
