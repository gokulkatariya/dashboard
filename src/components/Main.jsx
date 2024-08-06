function Main() {
  return (
    <main className="w-full flex">
      <div className=" left md:w-20 min-h-[80vh] bg-gray-800 flex flex-col items-center gap-7 relative">
        <div className="mt-5">
          <img
            className="invert cursor-pointer"
            width="24"
            src="/src/assets/home-1391-svgrepo-com.svg"
            alt=""
          />
        </div>
        <div>
          <img
            className="invert cursor-pointer"
            width="24"
            src="/src/assets/activity-svgrepo-com (1).svg"
            alt=""
          />
        </div>
        <div>
          <img
            className="invert cursor-pointer"
            width="24"
            src="/src/assets/activity-svgrepo-com.svg"
            alt=""
          />
        </div>
        <div>
          <img
            className="invert cursor-pointer"
            width="24"
            src="/src/assets/wallet-svgrepo-com.svg"
            alt=""
          />
        </div>
        <div>
          <img
            className="invert cursor-pointer"
            width="24"
            src="/src/assets/bag-check-svgrepo-com.svg"
            alt=""
          />
        </div>
        <div>
          <img
            className="invert cursor-pointer absolute bottom-12 left-7"
            width="24"
            src="/src/assets/switch-off-on-power-energy-battery-ecology-svgrepo-com.svg"
            alt=""
          />
        </div>
      </div>
      <div className=" right text-white p-5 w-full">
        <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
        <div className="md:grid mygrid gap-2 ">
          <div className="bg-gray-800 p-3 rounded-md flex flex-col gap-3 relative">
            <img
              className=" bg-blue-400 p-1 rounded-md"
              width="34"
              src="/src/assets/bag-svgrepo-com.svg"
              alt=""
            />
            <div>Total Orders</div>
            <div className="font-bold text-2xl">75</div>
            <div className="text-green-600 absolute right-3 bottom-3 flex items-center gap-2">
              <img
                className=" bg-green-600 rounded-sm"
                width="20"
                src="/src/assets/211623_b_up_arrow_icon.png"
                alt=""
              />
              <span className="text-lg">3%</span>
            </div>
          </div>
          <div className="bg-gray-800 p-3 rounded-md flex flex-col gap-3 relative">
            <img
              className=" bg-green-400 p-1 rounded-md"
              width="34"
              src="/src/assets/bag-svgrepo-com.svg"
              alt=""
            />
            <div>Total Delivered</div>
            <div className="font-bold text-2xl">70</div>
            <div className="text-red-600 absolute right-3 bottom-3 flex items-center gap-2">
              <img
                className=" bg-red-600 rounded-sm"
                width="20"
                src="/src/assets/211614_down_b_arrow_icon.png"
                alt=""
              />
              <span className="text-lg">3%</span>
            </div>
          </div>
          <div className="bg-gray-800 p-3 rounded-md flex flex-col gap-3 relative">
            <img
              className=" bg-red-400 p-1 rounded-md"
              width="34"
              src="/src/assets/bag-svgrepo-com.svg"
              alt=""
            />
            <div>Total Cancelled</div>
            <div className="font-bold text-2xl">05</div>
            <div className="text-green-600 absolute right-3 bottom-3 flex items-center gap-2">
              <img
                className=" bg-green-600 rounded-sm"
                width="20"
                src="/src/assets/211623_b_up_arrow_icon.png"
                alt=""
              />
              <span className="text-lg">3%</span>
            </div>
          </div>
          <div className="bg-gray-800 p-3 rounded-md flex flex-col gap-3 relative">
            <img
              className=" bg-purple-400 p-1 rounded-md"
              width="32"
              src="/src/assets/down-up-arrow-svgrepo-com.svg"
              alt=""
            />
            <div>Total revenue</div>
            <div className="font-bold text-2xl">$12K</div>
            <div className="text-red-600 absolute right-3 bottom-3 flex gap-2 items-center">
              <img
                className=" bg-red-600 rounded-sm"
                width="20"
                src="/src/assets/211614_down_b_arrow_icon.png"
                alt=""
              />
              <span className="text-lg">3%</span>
            </div>
          </div>
          <div className="bg-gray-800 p-3 rounded-md flex items-center">
            <div>
              <div>Net Profit</div>
              <div className="font-bold text-2xl mt-5">$6759.25</div>
              <div className="text-green-300 mt-5 flex items-center gap-2">
                <img
                  className=" bg-green-600 rounded-sm"
                  width="20"
                  src="/src/assets/211623_b_up_arrow_icon.png"
                  alt=""
                />
                <span className="text-lg">3%</span>
              </div>
            </div>
            <div className="flex items-center justify-center  relative">
              <svg className=" absolute -rotate-90 top-0 left-0 p-1  z-10">
                <circle
                  cx="230"
                  cy="48"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="transparent"
                  className="text-gray-700"
                />

                <circle
                  cx="230"
                  cy="48"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="transparent"
                  strokeDasharray="80%"
                  strokeDashoffset="circumference - currentSkill.percent / 100 * circumference"
                  className="text-blue-500 "
                />
              </svg>
              <span className="absolute text-xl left-28 bottom-0">70%</span>
              <span className="absolute left-24 text-xs top-0">Completed</span>
            </div>
          </div>
        </div>
        <div className="md:grid mygrid2 gap-3 mt-3">
          <div className=" bg-gray-800 p-3 rounded-md ">
            <div className="flex justify-between items-center mt-2">
              <h1 className="text-xl font-bold">Activity</h1>
              <button className="bg-gray-600 pl-3 p-2 px-8 rounded-3xl relative">
                Weekly
                <img
                  width="18"
                  className="invert absolute top-3 right-2"
                  src="/src/assets/211614_down_b_arrow_icon.png"
                  alt=""
                />
              </button>
            </div>
            <div className="relative">
              <div className="md:flex  flex-col md:gap-8 px-10 ">
                <div className="relative mt-10">
                  <span className="absolute -inset-3 -left-10">15K</span>
                  <span>
                    <hr />
                  </span>
                </div>
                <div className="relative mt-5">
                  <span className="absolute -inset-3 -left-10">10K</span>
                  <span>
                    <hr />
                  </span>
                </div>
                <div className="relative mt-5">
                  <span className="absolute -inset-3 -left-10">5K</span>
                  <span>
                    <hr />
                  </span>
                </div>
                <div className="relative mt-5">
                  <span className="absolute -inset-3 -left-10">0K</span>
                  <span>
                    <hr />
                  </span>
                </div>
              </div>
              <div className="absolute bottom-7">
                <div className="flex gap-2">
                  <span className="bg-blue-500  h-24 block w-5 rounded-3xl ml-14"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                  <span className="bg-blue-500 h-24 block w-5 rounded-3xl"></span>
                </div>
              </div>
              <div className="md:flex md:gap-16 mb-2">
                <span className="ml-16">5</span>
                <span>9</span>
                <span>11</span>
                <span>13</span>
                <span>15</span>
                <span>17</span>
                <span>19</span>
                <span>21</span>
                <span>23</span>
                <span>25</span>
                <span>27</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-5 rounded-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <img
                  className=" bg-red-700 p-3 rounded-full"
                  width="60"
                  src="/src/assets/crosshair.png"
                  alt=""
                />
                <span className="text-2xl">Goals</span>
              </div>
              <span className="text-2xl bg-slate-600 px-2 pb-1  rounded-full">
                &gt;
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <img
                  className=" bg-blue-700 p-3 mt-5 rounded-full"
                  width="60"
                  src="/src/assets/dish.png"
                  alt=""
                />
                <span className="text-2xl mt-5">Popular Dishes</span>
              </div>
              <span className="text-2xl bg-slate-600 px-2 pb-1 mt-5 rounded-full">
                &gt;
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5 ">
                <img
                  className=" bg-green-700 p-3 mt-5 rounded-full"
                  width="60"
                  src="/src/assets/dish.png"
                  alt=""
                />
                <span className="text-2xl mt-5">Menus</span>
              </div>
              <span className="text-2xl bg-slate-600 px-2 pb-1 mt-5 rounded-full">
                &gt;
              </span>
            </div>
          </div>
        </div>
        <div className="md:grid mygrid2 gap-3 mt-3">
          <div className=" bg-gray-800 p-3 rounded-md ">
            <h1 className="text-2xl font-bold mt-3">Recent Orders</h1>
            <div className="relative mt-6">
              <table className="w-full text-sm text-left">
                <thead className="text-xl text-white">
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="col" className="px-6 py-3">
                      Customer
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Order No.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className=" flex items-center gap-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="rounded-full cursor-pointer"
                        width="40"
                        src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-34284,resizemode-75,msid-101480759/magazines/panache/srk-meets-with-accident-during-shoot-in-los-angeles-undergoes-surgery.jpg"
                        alt=""
                      />
                      <span>Apple MacBook Pro 17</span>
                    </th>
                    <td className="px-6 py-4">Laptopr</td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4">
                      <button className="bg-green-800 py-2 px-5 rounded-3xl">
                        Delivered
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className=" flex items-center gap-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="rounded-full cursor-pointer"
                        width="40"
                        src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-34284,resizemode-75,msid-101480759/magazines/panache/srk-meets-with-accident-during-shoot-in-los-angeles-undergoes-surgery.jpg"
                        alt=""
                      />
                      <span>Microsoft Surface Pro</span>
                    </th>
                    <td className="px-6 py-4">Laptop PC</td>
                    <td className="px-6 py-4">$1299</td>
                    <td className="px-6 py-4">
                      <button className="bg-green-800 py-2 px-5 rounded-3xl">
                        Delivered
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className=" flex items-center gap-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="rounded-full cursor-pointer"
                        width="40"
                        src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-34284,resizemode-75,msid-101480759/magazines/panache/srk-meets-with-accident-during-shoot-in-los-angeles-undergoes-surgery.jpg"
                        alt=""
                      />
                      <span>Magic Mouse 2</span>
                    </th>
                    <td className="px-6 py-4">Accessories</td>
                    <td className="px-6 py-4">$344</td>
                    <td className="px-6 py-4">
                      <button className="bg-red-800 py-2 px-5 rounded-3xl">
                        Cancelled
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className=" flex items-center gap-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="rounded-full cursor-pointer"
                        width="40"
                        src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-34284,resizemode-75,msid-101480759/magazines/panache/srk-meets-with-accident-during-shoot-in-los-angeles-undergoes-surgery.jpg"
                        alt=""
                      />
                      <span>Key Board 2</span>
                    </th>
                    <td className="px-6 py-4">Desktop</td>
                    <td className="px-6 py-4">$554</td>
                    <td className="px-6 py-4">
                      <button className="bg-red-800 py-2 px-5 rounded-3xl">
                        Cancelled
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-gray-800 p-4  rounded-md overflow-y-auto max-h-[56vh]">
            <h1 className="text-xl font-bold ">Customer&apos;s Feedback</h1>
            <div className=" flex items-center gap-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white mt-3">
              <img
                className="rounded-full cursor-pointer"
                width="40"
                src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-34284,resizemode-75,msid-101480759/magazines/panache/srk-meets-with-accident-during-shoot-in-los-angeles-undergoes-surgery.jpg"
                alt=""
              />
              <span>Jenny Wilson</span>
            </div>
            <span className="fa fa-star text-orange-400"></span>
            <span className="fa fa-star text-orange-400"></span>
            <span className="fa fa-star text-orange-400"></span>
            <span className="fa fa-star text-orange-400"></span>
            <span className="fa fa-star"></span>
            <p className="mb-4 mt-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              magni corporis magnam ut nesciunt praesentium. Incidunt minima
              neque ut explicabo?
            </p>
            <hr />
            <div className=" flex items-center gap-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white mt-3">
              <img
                className="rounded-full cursor-pointer"
                width="40"
                src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-34284,resizemode-75,msid-101480759/magazines/panache/srk-meets-with-accident-during-shoot-in-los-angeles-undergoes-surgery.jpg"
                alt=""
              />
              <span>Jenny Wilson</span>
            </div>
            <span className="fa fa-star text-orange-400"></span>
            <span className="fa fa-star text-orange-400"></span>
            <span className="fa fa-star text-orange-400"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <p className="mb-4 mt-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              magni corporis magnam ut nesciunt praesentium. Incidunt minima
              neque ut explicabo?
            </p>
            <hr />
            <div className=" flex items-center gap-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white mt-3">
              <img
                className="rounded-full cursor-pointer"
                width="40"
                src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-34284,resizemode-75,msid-101480759/magazines/panache/srk-meets-with-accident-during-shoot-in-los-angeles-undergoes-surgery.jpg"
                alt=""
              />
              <span>Jenny Wilson</span>
            </div>
            <span className="fa fa-star text-orange-400"></span>
            <span className="fa fa-star text-orange-400"></span>
            <span className="fa fa-star text-orange-400"></span>
            <span className="fa fa-star text-orange-400"></span>
            <span className="fa fa-star"></span>
            <p className="mb-4 mt-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              magni corporis magnam ut nesciunt praesentium. Incidunt minima
              neque ut explicabo?
            </p>
            <hr />
            <div className=" flex items-center gap-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white mt-3">
              <img
                className="rounded-full cursor-pointer"
                width="40"
                src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-34284,resizemode-75,msid-101480759/magazines/panache/srk-meets-with-accident-during-shoot-in-los-angeles-undergoes-surgery.jpg"
                alt=""
              />
              <span>Jenny Wilson</span>
            </div>
            <span className="fa fa-star text-orange-400"></span>
            <span className="fa fa-star text-orange-400"></span>
            <span className="fa fa-star text-orange-400"></span>
            <span className="fa fa-star text-orange-400"></span>
            <span className="fa fa-star text-orange-400"></span>
            <p className="mb-4 mt-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              magni corporis magnam ut nesciunt praesentium. Incidunt minima
              neque ut explicabo?
            </p>
            <hr />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
