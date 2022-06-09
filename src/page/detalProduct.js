import { getApi } from "../api";
import footer from "../components/footer";
import Header from "../components/header";
import navBar from "../components/navbar";

const detalProduct = {
  async render(id) {
    const book = await getApi(`/books/${id.data.id}`);

    return `
    ${Header.render()}
    ${navBar.render()}
    <section class="bg-[#efefef] py-5">
    <div class="max-w-[1240px] w-full rounded-md m-auto bg-[#fff] flex">
      <div
        class="max-w-[460px] border-r-[1px] border-border-color w-full p-5"
      >
      <div>
      <img class="w-full cursor-pointer" src="${
        book.images[0].base_url
      }" id="imgSetSrc" alt="" />
      </div>
      
      <div class="flex mt-[20px] w-full>
      ${book.images
        .map(
          (image) => `
          <img class="mr-[20px] w-[80px] cursor-pointer" id="imgSrc" src="${image.base_url}" alt="" />
      `
        )
        .join("")}</div>
      </div>
      <div class="w-full pt-5 pl-5">
        <div>
          <!--  -->
          <div>
            <span class="capitalize text-sm font-normal"
              >tác giả:
              <a class="text-bg-search" href="">${
                book.authors ? book.authors[0].name : ""
              }</a></span
            >
            <h3 class="font-normal capitalize text-[30px] max-w-[500px]">
              ${book.name}
            </h3>
            <div class="text-yellow text-xs">
              <span class="text-[18px] font-medium">${
                book.rating_average
              }</span>
              <i class="text-[20px] fa-solid fa-star ml-[1px]"></i>
              <span class="ml-2 text-text128 capitalize"
                >(đã bán ${
                  book.quantity_sold ? book.quantity_sold.text : ""
                })</span
              >
            </div>
          </div>

          <div class="max-w-[479px] p-5 w-full bg-bg-price mt-8 flex items-center">
            <h3 class="text-xl font-medium line-through">${
              book.original_price
            } đ</h3>
            <span class="ml-5">Chỉ còn: </span>
            <h3 class="text-red-button ml-[5px] font-light text-2xl">${
              book.list_price
            } đ</h3>
          </div>
          <div class="max-w-[550px] mt-5 text-text128">
            <span>
              ${book.short_description}
            </span
            >
          </div>
          <div>
            <div class="mt-10">
              <h3 class="capitalize mb-3">số lượng</h3>
              <div
                class="border-[1px] max-w-[120px] flex items-center justify-around"
              >
                <i class="fa-solid fa-plus cursor-pointer"></i>
                <input type="text" class="max-w-[70px] pl-8" value="1" />
                <i class="fa-solid fa-minus cursor-pointer"></i>
              </div>
              <div
                class="cursor-pointer mt-5 w-full max-w-[350px] flex justify-center items-center py-4 bg-red-button rounded-md hover:bg-opacity-90 mb-[20px]"
              >
                <button class="text-[#fff] capitalize ">chọn mua</button>
              </div>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </section>
  <section
  class="max-text-[#4F4F4F] leading-[21px] font-normal w-[1240px] m-auto"
>
  <div
    class="max-text-[#4F4F4F] leading-[21px] font-normal w-[920px] p-[10px]"
  >
    <div>
      <h3 class="text-[19px] leading-[32px] text-[#333333] capitalize">
        ${book.specifications[0].name}
      </h3>
    </div>
    <div class="mt-[15px] text-[13px]">
      <table
        class="table text-[#4F4F4F] leading-[21px] font-normal w-full text-sm text-left text-gray-500 dark:text-gray-400"
      >
        <tbody
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
        ${book.specifications[0].attributes
          .map(
            (attribute) => `
              <tr>
                <td
                  class="text-[#4F4F4F] leading-[21px] font-normal w-[300px] py-[20px] text-[#242424] font-normal leading-[21px] px-[15px] bg-[#EFEFEF]"
                >
                  ${attribute.name}
                </td>
                <td
                  class="py-[20px] text-[#242424] font-normal leading-[21px] px-[15px]"
                >
                  ${attribute.value}
                </td>
              </tr>
          `
          )
          .join("")}
          
        </tbody>
      </table>
    </div>
    <div class="mt-[43px]">
      <h3
        class="text-[#333333] text-[20px] leading-[32px] font-normal capitalize"
      >
        Mô Tả Sản Phẩm
      </h3>
      <div class="mt-[11px]">
        <span class="text-[#242424] text-[14px] leading-[21px] font-normal">
          ${book.description}
        </span>
      </div>
    </div>
  </div>
</section>
  ${footer.render()}
    `;
  },
  afterRender() {
    const imgSetSrc = document.querySelector("#imgSetSrc");
    const imgSrc = document.querySelectorAll("#imgSrc");
    imgSrc.forEach((item) =>
      item.addEventListener("click", function () {
        const src = this.getAttribute("src");
        console.log((imgSetSrc.src = src));
      })
    );
  },
};

export default detalProduct;
