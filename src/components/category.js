import { getApi } from "../api";

const Category = {
  async render() {
    const data = await getApi("/books");
    const categorys = data.map((book) => book.categories.name);
    const category = categorys.reduce(
      (previousValue, item) =>
        previousValue.includes(item) ? previousValue : [...previousValue, item],
      []
    );
    data.map((item) => console.log(item.categories.id));
    return `
            <div class="max-w-[250px] w-full pt-3">
            <div class="mb-3">
            <div class="border-b-[1px] border-border-color">
                <div class="pl-3 pb-2">
                <h3 class="text-[17px] uppercase font-medium tracking-normal mb-[10px] mt-[8px]">
                    danh mục sản phẩm
                </h3>
                <ul class="block mt-2 ">
                ${category
                  .map(
                    (cate) => `
                    <li class="mt-[10px]">
                    <a class="hover:text-primary-blue text-[#666] capitalize text-sm" href=""
                        >${cate}</a
                    >
                    </li>
                `
                  )
                  .join("")}             
                </ul>
                </div>
            </div>
            </div>
            <div class="border-b-[1px] border-border-color">
            <h3 class="pl-3 pb-2 uppercase font-medium tracking-normal">
            địa chỉ nhận hàng
            </h3>
            <div class="pl-3 pb-2">
            <a href="" class="capitalize text-text128 text-xs block"
                >q.hoàn kiếm,p hàng trống, hà nội</a
            >
            <span class="capitalize text-base font-bold text-bg-search"
                >đổi địa chỉ</span
            >
            </div>
            </div>

        </div>

        `;
  },
};

export default Category;
