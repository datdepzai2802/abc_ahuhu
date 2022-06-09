const navBar = {
  render() {
    return `
        <section class="contaienr bg-[#fff]">
        <div class="w-full max-w-[1240px] m-auto py-4">
          <ul class="flex items-center">
          <li class="mr-4">
          <a
            class="capitalize text-black text-base hover:text-[#777] transition-all"
            href="/" 
            >trang chủ</a
          >
          </li>   
            <li class="mr-4">
              <a
                class="capitalize text-black text-base hover:text-[#777] transition-all"
                href="/products" data-navigo
                >nhà sách</a
              >
            </li>
            <li class="mr-4">
              <a
                class="capitalize text-black text-base hover:text-[#777] transition-all"
                href=""
                >thịt rau củ</a
              >
            </li>
            <li class="mr-4">
              <a
                class="capitalize text-black text-base hover:text-[#777] transition-all"
                href=""
                >làm đẹp</a
              >
            </li>
            <li class="mr-4">
              <a
                class="capitalize text-black text-base hover:text-[#777] transition-all"
                href="/admin/product"
                >admin</a
              >
            </li>
          </ul>
        </div>
      </section>
        `;
  },
};

export default navBar;
