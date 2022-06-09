// import components
import Header from "../components/header";
import footer from "../components/footer";
import navBar from "../components/navbar";
//API
import { getApi } from "../api";
import Category from "../components/category";
//
const productPage = {
  async render() {
    const data = await getApi("/books");
    return `
      ${Header.render()}
      ${navBar.render()}
      <section class="bg-[#efefef] py-5">
      <div class="max-w-[1240px] flex w-full m-auto bg-[#fff] rounded-l-sm">
      
      ${await Category.render()}
      <div class="w-full border-l-[1px] border-border-color">
        <div class="border-b-[1px] border-border-color pb-4 pt-2">
          <div>
            <h3 class="ml-4 text-[#565656] text-[24px] font-light capitalize">
              nhà sách tiki
            </h3>
          </div>

          <div class="mt-3">
            <img src="src/image/banner.jpg" alt="" />
          </div>

          <div class="mt-5 pl-3">
                <ul>
                <li class="inline-block mr-[20px]">
                    <button
                    class="text-[#565656] font-normal capitalize hover:text-bg-search"
                    data-categories="sách tiếng việt"
                    >sách tiếng việt</button
                    >
                </li>
                <li class="inline-block mr-[20px]">
                    <button
                    class="text-[#565656] font-normal capitalize hover:text-bg-search"
                    data-categories="tâm lý học"
                    >tâm lý học</button
                    >
                </li>
                <li class="inline-block mr-[20px]">
                    <button
                    class="text-[#565656] font-normal capitalize hover:text-bg-search"
                    >sách anh ngữ</button
                    >
                </li>
                <li class="inline-block mr-[20px]">
                    <button
                    class="text-[#565656] font-normal capitalize hover:text-bg-search"
                    >máy tính bỏ túi</button
                    >
                </li>
                <li class="inline-block mr-[20px]">
                    <button
                    class="text-[#565656] font-normal capitalize hover:text-bg-search"     
                    >văn phòng thẩm</button
                    >
                </li>
                </ul>
            </div>

            
        </div>
        <div class="flex flex-wrap">
          ${data
            .map(
              (item) => `
             <a href="products/${item.id}" data-navigo>
                  <div class="max-w-[245px] w-full p-4 hover:shadow-2xl transition-all mb-6">
                  <div>
                    <img
                      class="w-full items-center"
                      src="${item.images[0].base_url}"
                      alt=""
                    />
                  </div>
                  <div class="mt-3 px-4">
                    <h3 class="text-[13px] capitalize text-[rgb(36, 36, 36)] font-normal">
                      ${item.name}
                    </h3>
                    <div class="text-yellow">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <span class="text-black mt-3">${item.list_price} đ</span>
                  </div>
                </div>
             </a>
          `
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>
      ${footer.render()}
    `;
  },
};

export default productPage;
