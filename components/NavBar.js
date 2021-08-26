import React from 'react';

const data = [
  {
    title: '居家生活',
    subCols: [
      {
        col: [
          {
            title: '家族布置',
            cols: [
              {
                title: '擺飾',
              },
              {
                title: '蠟燭/燭台',
              },
              { title: '香氛/精油/線香' },
              { title: '植栽/盆栽' },
              { title: '乾燥花/捧花' },
              { title: '花瓶/陶瓷' },
              { title: '海報/畫作/版畫' },
              { title: '客製畫像' },
              { title: '牆貼/壁貼' },
              { title: '畫框/相框' },
              { title: '玩偶/公仔' },
              { title: '門簾/門牌' },
            ],
          },
          {
            title: '水壺/保溫瓶/飲料提袋',
            cols: [
              { title: '水壺/水瓶' },
              { title: '保溫瓶/保溫杯' },
              { title: '隨行杯提袋/水壺袋' },
            ],
          },
        ],
      },
      {
        col: [
          {
            title: '生活收納/雜貨',
            cols: [
              {
                title: '收納用品',
              },
              {
                title: '置物架/籃子',
              },
              { title: '面紙盒' },
              { title: '眼鏡盒/拭布' },
              { title: '存錢筒' },
              { title: '扇子' },
              { title: '衣架/掛勾' },
              { title: '垃圾桶' },
              { title: '衛浴用品' },
            ],
          },
          {
            title: '居家織品',
            cols: [
              { title: '寢具' },
              { title: '枕頭/抱枕' },
              { title: '被子/毛毯' },
              { title: '地墊/地毯' },
              { title: '毛巾浴巾' },
            ],
          },
        ],
      },
      {
        col: [
          {
            title: '家具',
            cols: [
              {
                title: '餐桌/書桌',
              },
              { title: '椅子/沙發' },
              { title: '書架/書擋' },

              { title: '電視櫃' },
              { title: '衣櫃/鞋櫃' },
              {
                title: '其他家具',
              },
            ],
          },
          {
            title: '家用電器/用品',
            cols: [
              { title: '燈具/燈飾' },
              { title: '時鐘/鬧鐘' },
              { title: '電風扇' },
              { title: '吸塵器' },
              { title: '其他小家電' },
            ],
          },
          {
            title: '居家清潔',
            cols: [{ title: '衣物清潔' }],
          },
          {
            title: '其他居家生活商品',
            cols: [
              { title: '情趣用品' },
              { title: '防蚊用品' },
              { title: '其他' },
            ],
          },
        ],
      },
    ],
    hotBanners: [
      {
        title: '香氛/精油/線香',
        img: '//cdn04.pinkoi.com/pinkoi.site/home/subcategory_banners_v2/503.jpg',
      },
      {
        title: '收納用品',
        img: '//cdn04.pinkoi.com/pinkoi.site/home/subcategory_banners_v2/532.jpg',
      },
    ],
  },
  {
    title: '配件飾品',
    subCols: [
      {
        col: [
          {
            title: '日常包款',
            cols: [
              {
                title: '側背包/斜背包',
              },
              {
                title: '手提包/手提袋',
              },
              { title: '後背包/書包' },
              { title: '束口後背包' },
              { title: '手拿包' },
            ],
          },
          {
            title: '錢包',
            cols: [{ title: '零錢包' }, { title: '長短夾/錢包' }],
          },
          {
            title: '電腦/公事包',
            cols: [{ title: '電腦包/筆電包' }, { title: '公事包/醫生包' }],
          },
        ],
      },
      {
        col: [
          {
            title: '收納包/行李箱',
            cols: [
              {
                title: '化妝包/雜物包',
              },
              {
                title: '行李箱/行李箱保護套',
              },
            ],
          },
          {
            title: '其他包包提袋',
            cols: [
              {
                title: '相機包/相機袋',
              },
              {
                title: '其他',
              },
            ],
          },
        ],
      },
    ],
    hotBanners: [
      {
        title: '側背包/斜背包',
        img: '//cdn04.pinkoi.com/pinkoi.site/home/subcategory_banners_v2/104_v3.jpg',
      },
      {
        title: '長短夾/錢包',
        img: '//cdn04.pinkoi.com/pinkoi.site/home/subcategory_banners_v2/103_v3.jpg',
      },
    ],
  },
];

const Header = () => {
  return (
    <header className="">
      <div className=" min-w-5-xl relative w-full py-4 max-w-7xl mx-auto">
        {/* logo */}
        <a className="inline-block align-top w-32 h-11 mr-12" href="">
          <svg
            height="24"
            className="w-full h-full"
            viewBox="0 0 82 24"
            width="82"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.019 5.4a5.95 5.95 0 0 1 5.95 5.95v6.639c0 .258-.21.468-.469.468h-2.038a.469.469 0 0 1-.468-.468V11.35a2.975 2.975 0 0 0-5.95 0v6.639c0 .258-.21.468-.47.468h-2.037a.469.469 0 0 1-.468-.468V5.36c0-.309.292-.533.59-.453l2.037.546c.205.055.347.24.347.452v.297A5.917 5.917 0 0 1 36.02 5.4zm15.872 5.21l7.048 7.048c.295.295.086.8-.331.8h-2.689a.937.937 0 0 1-.662-.275l-5.355-5.355v5.16c0 .26-.21.47-.469.47h-2.038a.469.469 0 0 1-.468-.47V.469c0-.307.292-.532.59-.452l2.038.546c.205.055.347.24.347.453v7.377l3.213-3.213a.937.937 0 0 1 .662-.274h2.915c.334 0 .501.403.265.64zm15.814 5.258a4.104 4.104 0 1 0 0-8.209 4.104 4.104 0 0 0 0 8.21zm0-11.137a7.033 7.033 0 1 1 0 14.065 7.033 7.033 0 0 1 0-14.065zm-57.972.071a6.827 6.827 0 0 1 6.778 6.778c.027 3.783-3.165 6.877-6.948 6.877H7.92a.469.469 0 0 1-.469-.468V15.89c0-.259.21-.468.469-.468h1.68c2.086 0 3.846-1.649 3.878-3.735a3.793 3.793 0 0 0-3.852-3.851c-2.085.031-3.734 1.792-3.734 3.878v6.574a6.817 6.817 0 0 1-2.744 5.471.944.944 0 0 1-1.038.067L.176 22.71c-.26-.15-.226-.538.058-.634 1.522-.518 2.623-2.018 2.623-3.788V11.75c0-3.782 3.094-6.975 6.876-6.948zm14.534.652c.205.055.347.24.347.453v12.082c0 .258-.21.468-.468.468h-2.038a.469.469 0 0 1-.469-.468V5.36c0-.309.292-.533.59-.453zm57.351 0c.205.055.348.24.348.453v12.082c0 .258-.21.468-.469.468H79.46a.469.469 0 0 1-.468-.468V5.36c0-.309.292-.533.59-.453z"
              fill="#003354"
              className="color"
            ></path>
          </svg>
        </a>
        {/* search */}
        <div className="inline-block w-96">
          <form action="" className=" relative">
            <div className="flex">
              <input
                className="flex-1 px-6 py-2 border border-gray-400"
                type="search"
              />
              <input
                className="w-20 text-white bg-blue-800"
                type="submit"
                value="搜尋"
              />
            </div>
            <div className=" space-x-2.5 text-sm">
              <a href="">拼圖</a>
              <a href="">植物盆栽</a>
              <a href="">新開館優惠</a>
              <a href="">雨具救援</a>
              <a href="">口罩免運</a>
            </div>
            <span className="absolute right-20 top-2">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.443 11.474a3.154 3.154 0 01-3.158 3.158 3.154 3.154 0 01-3.158-3.158V5.158A3.154 3.154 0 0112.285 2a3.154 3.154 0 013.158 3.158v6.316zm2.032.894a1.05 1.05 0 011.031-.894c.642 0 1.158.568 1.053 1.2a7.36 7.36 0 01-6.221 6.084v2.19c0 .578-.474 1.052-1.053 1.052a1.056 1.056 0 01-1.053-1.053v-2.19a7.36 7.36 0 01-6.22-6.083c-.095-.632.41-1.2 1.052-1.2.516 0 .947.379 1.032.894.431 2.474 2.59 4.369 5.19 4.369 2.6 0 4.757-1.895 5.189-4.369z"
                  fill="#66666A"
                ></path>
              </svg>
            </span>
          </form>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0">
          <div className="relative space-x-6">
            <a href="" className="">
              我想再 Pinkoi 上販售
            </a>
            <a href="" className="border border-gray-700 px-2 py-2 rounded-md">
              <span>登入/註冊</span>
            </a>
            <a href="" className="inline-block align-text-bottom">
              <svg
                height="24"
                viewBox="0 0 20 20"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.494 4.552a.625.625 0 0 1 .105.546l-1.484 5.364a.625.625 0 0 1-.603.458H7.817l.03.088c.041.119.047.245.015.365l-.385 1.474h8.53v1.25h-9.34a.627.627 0 0 1-.605-.783l.543-2.072-2.603-7.405H2.153v-1.25h2.292c.265 0 .502.167.59.417l.457 1.302h11.505c.195 0 .38.09.497.246zM15.037 9.67l1.139-4.114H5.93L7.377 9.67zm-6.391 6.718a1.25 1.25 0 1 1-2.501 0 1.25 1.25 0 0 1 2.5 0zm7.361 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z"
                  fill="#39393e"
                  className="color"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <nav className="min-w-5-xl relative w-full  pt-4 mb-4  shadow-inner">
        <div className=" max-w-7xl mx-auto">
          <ul className="relative flex items-center">
            <li className="h-12 w-1/5 inline-flex items-center justify-center group group2">
              <a href="" className="inline-block group2-hover:text-white">
                主題企劃
              </a>
              {/*  */}
              <div className="group2-hover:block p-4 absolute z-20 bg-red-50 left-0 top-12 w-full">
                <div className="text-center pt-4 leading-5 block">
                  <div className="inline-block">
                    {/* sub col */}
                    <div className="block">
                      <div className="inline-block align-top pl-4 text-left text-md text-gray-500 leading-6 w-48">
                        <ul className="pb-4">
                          <li className="sub-title text-md text-gray-700 font-bold pb-2">
                            家飾佈置
                          </li>
                          <li>
                            <a>擺飾</a>
                          </li>
                          <li>
                            <a>蠟燭/燭台</a>
                          </li>
                          <li>
                            <a>香氛/精油/線香</a>
                          </li>
                          <li>
                            <a>植栽/盆栽</a>
                          </li>
                          <li>
                            <a>乾燥花/捧花</a>
                          </li>
                          <li>
                            <a>花瓶/陶器</a>
                          </li>
                          <li>
                            <a>海報/畫作/版畫</a>
                          </li>
                          <li>
                            <a>客製畫像</a>
                          </li>
                          <li>
                            <a>牆貼/壁貼</a>
                          </li>
                          <li>
                            <a>畫框/相框</a>
                          </li>
                          <li>
                            <a>玩偶/公仔</a>
                          </li>
                          <li>
                            <a>門簾/門牌</a>
                          </li>
                        </ul>
                        <ul className="pb-4">
                          <li className="sub-title sub-title text-md text-gray-700 font-bold">
                            水壺/保溫瓶/飲料提袋
                          </li>
                          <li>
                            <a>水壺/水瓶</a>
                          </li>
                          <li>
                            <a>保溫瓶/保溫杯</a>
                          </li>
                          <li>
                            <a>隨行杯提袋/水壺袋</a>
                          </li>
                        </ul>
                      </div>
                      <div className="inline-block text-left align-top pl-4 text-md text-gray-500 leading-6 w-48">
                        <ul className="pb-4">
                          <li className="sub-title text-md text-gray-700 font-bold pb-2">
                            生活收納/雜貨
                          </li>
                          <li>
                            <a>收納用品</a>
                          </li>
                          <li>
                            <a>置物架/籃子</a>
                          </li>
                          <li>
                            <a>面紙盒</a>
                          </li>
                          <li>
                            <a>眼鏡盒/拭布</a>
                          </li>
                          <li>
                            <a>存錢筒</a>
                          </li>
                          <li>
                            <a>扇子</a>
                          </li>
                          <li>
                            <a>衣架/掛勾</a>
                          </li>
                          <li>
                            <a>垃圾桶</a>
                          </li>
                          <li>
                            <a>衛浴用品</a>
                          </li>
                        </ul>
                        <ul className="pb-4">
                          <li className="sub-title text-md text-gray-700 font-bold pb-2">
                            居家織品
                          </li>
                          <li>
                            <a>寢具</a>
                          </li>
                          <li>
                            <a>枕頭/抱枕</a>
                          </li>
                          <li>
                            <a>被子/毛毯</a>
                          </li>
                          <li>
                            <a>地墊/地毯</a>
                          </li>
                          <li>
                            <a>毛巾浴巾</a>
                          </li>
                        </ul>
                      </div>
                      <div className="inline-block text-left align-top pl-4 text-md text-gray-500 leading-6 w-48">
                        <ul className="pb-4">
                          <li className="sub-title text-md text-gray-700 font-bold pb-2">
                            家具
                          </li>
                          <li>
                            <a>餐桌/書桌</a>
                          </li>
                          <li>
                            <a>椅子/沙發</a>
                          </li>
                          <li>
                            <a>書架/書擋</a>
                          </li>
                          <li>
                            <a>電視櫃</a>
                          </li>
                          <li>
                            <a>衣櫃/鞋櫃</a>
                          </li>
                          <li>
                            <a>其他家具</a>
                          </li>
                        </ul>
                        <ul className="pb-4">
                          <li className="sub-title text-md text-gray-700 font-bold pb-2">
                            家用電器/用品
                          </li>
                          <li>
                            <a>燈具/燈飾</a>
                          </li>
                          <li>
                            <a>時鐘/鬧鐘</a>
                          </li>
                          <li>
                            <a>電風扇</a>
                          </li>
                          <li>
                            <a>吸塵器</a>
                          </li>
                          <li>
                            <a>其他小家電</a>
                          </li>
                        </ul>
                        <ul className="pb-4">
                          <li className="sub-title text-md text-gray-700 font-bold pb-2">
                            居家清潔
                          </li>
                          <li>
                            <a
                              href="/browse?category=5&amp;subcategory=562&amp;ref_sec=topnavigation"
                              data-sid="562"
                            >
                              衣物清潔
                            </a>
                          </li>
                        </ul>
                        <ul className="pb-4">
                          <li className="sub-title text-md text-gray-700 font-bold pb-2">
                            其他居家生活商品
                          </li>
                          <li>
                            <a>情趣用品</a>
                          </li>
                          <li>
                            <a>防蚊用品</a>
                          </li>
                          <li>
                            <a>其他</a>
                          </li>
                        </ul>
                        <a className="text-md text-gray-700 font-bold pb-2">
                          所有 居家生活
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="hot-banner inline-flex align-top space-x-4">
                    <a className="block bg-gray-100">
                      <div className="w-44 ">
                        <img
                          className="block "
                          loading="lazy"
                          src="//cdn04.pinkoi.com/pinkoi.site/home/subcategory_banners_v2/503.jpg"
                          alt="香氛/精油/線香"
                        />
                      </div>
                      <div className="text-left p-2 ">香氛/精油/線香</div>
                    </a>
                    <a className="block bg-gray-100">
                      <div className="w-44 ">
                        <img
                          className="w-full block"
                          loading="lazy"
                          src="//cdn04.pinkoi.com/pinkoi.site/home/subcategory_banners_v2/532.jpg"
                          alt="收納用品"
                        />
                      </div>
                      <div className="text-left p-2 ">收納用品</div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="h-12 w-1/5 inline-flex items-center justify-center group2">
              <a href="">配件飾品</a>
              {/* hover bar */}
              <div className="group2-hover:block absolute z-20 p-4 bg-red-50 left-0 top-12 w-full text-center  ">
                <div className="inline-block align-top text-gray-500">
                  {/* sub col */}
                  <div className="block space-x-8">
                    <div className="inline-block align-top text-left w-48 leading-6">
                      <ul className="pb-4">
                        <li className="text-lg  text-gray-700 font-bold pb-1">
                          日常包款
                        </li>
                        <li>側背包/斜背包</li>
                        <li>手提包/手提袋</li>
                        <li>後背包/書包</li>
                        <li>束口後背包</li>
                        <li>手拿包</li>
                      </ul>
                      <ul className="pb-4">
                        <li className="text-lg text-gray-700 font-bold pb-1">
                          錢包
                        </li>
                        <li>零錢包</li>
                        <li>長短夾/錢包</li>
                      </ul>
                      <ul className="pb-4">
                        <li className="text-lg text-gray-700 font-bold pb-1">
                          電腦/公事包
                        </li>
                        <li>電腦包/筆電包</li>
                        <li>公事包/醫生包</li>
                      </ul>
                    </div>
                    <div className="inline-block align-top text-left w-48 leading-6">
                      <ul className="pb-4">
                        <li className="text-lg  text-gray-700 font-bold pb-1">
                          收納包/行李箱
                        </li>
                        <li>化妝包/雜物包</li>
                        <li>行李箱/行李箱保護套</li>
                      </ul>
                      <ul className="pb-4">
                        <li className="text-lg  text-gray-700 font-bold pb-1">
                          其他包包提袋
                        </li>
                        <li>相機包/相機袋</li>
                        <li>其他</li>
                      </ul>
                      <a className="text-md text-gray-700 font-bold pb-2">
                        所有 包包提袋
                      </a>
                    </div>
                  </div>
                </div>
                <div className="inline-flex h-full space-x-2  align-top pb-2">
                  <a className="block bg-gray-100 text-left">
                    {/* img */}
                    <div className="w-48">
                      <img
                        className="w-full object-contain"
                        src="//cdn04.pinkoi.com/pinkoi.site/home/subcategory_banners_v2/104_v3.jpg"
                        alt=""
                      />
                    </div>
                    {/* text */}
                    <div className="px-3 py-2">側背包/斜背包</div>
                  </a>
                  <a className="block bg-gray-100 text-left">
                    <div className="w-48">
                      <img
                        className="w-full "
                        src="//cdn04.pinkoi.com/pinkoi.site/home/subcategory_banners_v2/103_v3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="px-3 py-2">長短夾/錢包</div>
                  </a>
                </div>
              </div>
            </li>
            {data.map(d => (
              <li className="h-12 w-1/5 inline-flex items-center justify-center group2">
                <a href="">{d.title}</a>
                <div className="group2-hover:block absolute z-20 p-4 bg-red-50 left-0 top-12 w-full text-center ">
                  <div className="inline-block align-top text-gray-500">
                    <div className="block space-x-8">
                      {d.subCols.map(subCol => (
                        <div className="inline-block align-top text-left w-48 leading-6">
                          {subCol.col.map(col => (
                            <ul className="pb-4">
                              <li className="text-lg  text-gray-700 font-bold pb-1">
                                {col.title}
                              </li>
                              {col.cols.map(col => (
                                <li className="hover:underline cursor-pointer">
                                  {col.title}
                                </li>
                              ))}
                            </ul>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="inline-flex h-full space-x-2  align-top pb-2">
                    {d.hotBanners.map(hotBanner => (
                      <a className="block bg-gray-100 text-left">
                        <div className="w-48">
                          <img className="w-full " src={hotBanner.img} alt="" />
                        </div>
                        <div className="px-3 py-2">{hotBanner.title}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            ))}
            <li className="h-12 w-1/5 inline-flex items-center justify-center">
              <a href="">配件飾品</a>
            </li>
            <li className="h-12 w-1/5 inline-flex items-center justify-center group2">
              <a href="">所有分類</a>
              {/* hover content */}
              <div className="group2-hover:block p-4 absolute z-20 bg-red-50 left-0 top-12 w-full">
                {/* wrap */}
                <div className="flex">
                  {/*left content 300px */}
                  <div className="w-72 flex-shrink-0 flex-grow bg-gray-400">
                    <ul>
                      <li onMouseEnter={() => console.log('hovered')}>
                        品牌旗艦館
                      </li>
                      <li>配件飾品</li>
                      <li>品牌旗艦館</li>
                      <li>品牌旗艦館</li>
                      <li>品牌旗艦館</li>
                      <li>品牌旗艦館</li>
                      <li>品牌旗艦館</li>
                      <li>品牌旗艦館</li>
                    </ul>
                  </div>
                  {/* right content */}
                  <div
                    className="flex-grow"
                    style={{ width: 'calc(100% - 288px)' }}
                  >
                    {/* wrap */}
                    {/* flex */}
                    {/* <div className="flex flex-wrap">
                        {Array.from({ length: 5 }).map(item => (
                          <>
                            <a class="flex w-1/4 mb-4">
                              <img
                                className="w-12 h-12 mr-2"
                                src="//cdn01.pinkoi.com/store/everydayobject/logo/1/150x150.jpg"
                                alt="EVERYDAY OBJECT"
                              />
                              <p>EVERYDAY OBJECT</p>
                            </a>
                            <a class="flex w-1/4 mb-4">
                              <img
                                className="w-12 h-12 mr-2"
                                src="//cdn02.pinkoi.com/store/lsy031/logo/4/150x150.jpg"
                                alt="EVERYDAY OBJECT"
                              />
                              <p>LSY林三益刷具</p>
                            </a>
                            <a class="flex w-1/4 mb-4">
                              <img
                                className="w-12 h-12 mr-2"
                                src="//cdn02.pinkoi.com/store/aesopshoes/logo/9/150x150.jpg"
                                alt="EVERYDAY OBJECT"
                              />
                              <p>Aesopshoes</p>
                            </a>
                            <a class="flex w-1/4 mb-4">
                              <img
                                className="w-12 h-12 mr-2"
                                src="//cdn01.pinkoi.com/store/moleskine-tw/logo/1/150x150.jpg"
                                alt="EVERYDAY OBJECT"
                              />
                              <p>MOLESKINE</p>
                            </a>
                          </>
                        ))}
                        <a href="">所有品牌旗艦館</a>
                      </div>
                     */}
                    {/* sub col */}
                    <div className="inline-block w-1/3 align-top pl-4 text-left text-md text-gray-500 leading-6 ">
                      <ul className="pb-4">
                        <li className="sub-title text-md text-gray-700 font-bold pb-2">
                          家飾佈置
                        </li>
                        <li>
                          <a>擺飾</a>
                        </li>
                        <li>
                          <a>蠟燭/燭台</a>
                        </li>
                        <li>
                          <a>香氛/精油/線香</a>
                        </li>
                        <li>
                          <a>植栽/盆栽</a>
                        </li>
                        <li>
                          <a>乾燥花/捧花</a>
                        </li>
                        <li>
                          <a>花瓶/陶器</a>
                        </li>
                        <li>
                          <a>海報/畫作/版畫</a>
                        </li>
                        <li>
                          <a>客製畫像</a>
                        </li>
                        <li>
                          <a>牆貼/壁貼</a>
                        </li>
                        <li>
                          <a>畫框/相框</a>
                        </li>
                        <li>
                          <a>玩偶/公仔</a>
                        </li>
                        <li>
                          <a>門簾/門牌</a>
                        </li>
                      </ul>
                      <ul className="pb-4">
                        <li className="sub-title sub-title text-md text-gray-700 font-bold">
                          水壺/保溫瓶/飲料提袋
                        </li>
                        <li>
                          <a>水壺/水瓶</a>
                        </li>
                        <li>
                          <a>保溫瓶/保溫杯</a>
                        </li>
                        <li>
                          <a>隨行杯提袋/水壺袋</a>
                        </li>
                      </ul>
                    </div>
                    <div className="inline-block w-1/3 text-left align-top pl-4 text-md text-gray-500 leading-6 ">
                      <ul className="pb-4">
                        <li className="sub-title text-md text-gray-700 font-bold pb-2">
                          生活收納/雜貨
                        </li>
                        <li>
                          <a>收納用品</a>
                        </li>
                        <li>
                          <a>置物架/籃子</a>
                        </li>
                        <li>
                          <a>面紙盒</a>
                        </li>
                        <li>
                          <a>眼鏡盒/拭布</a>
                        </li>
                        <li>
                          <a>存錢筒</a>
                        </li>
                        <li>
                          <a>扇子</a>
                        </li>
                        <li>
                          <a>衣架/掛勾</a>
                        </li>
                        <li>
                          <a>垃圾桶</a>
                        </li>
                        <li>
                          <a>衛浴用品</a>
                        </li>
                      </ul>
                      <ul className="pb-4">
                        <li className="sub-title text-md text-gray-700 font-bold pb-2">
                          居家織品
                        </li>
                        <li>
                          <a>寢具</a>
                        </li>
                        <li>
                          <a>枕頭/抱枕</a>
                        </li>
                        <li>
                          <a>被子/毛毯</a>
                        </li>
                        <li>
                          <a>地墊/地毯</a>
                        </li>
                        <li>
                          <a>毛巾浴巾</a>
                        </li>
                      </ul>
                    </div>
                    <div className="inline-block w-1/3 text-left align-top pl-4 text-md text-gray-500 leading-6 ">
                      <ul className="pb-4">
                        <li className="sub-title text-md text-gray-700 font-bold pb-2">
                          家具
                        </li>
                        <li>
                          <a>餐桌/書桌</a>
                        </li>
                        <li>
                          <a>椅子/沙發</a>
                        </li>
                        <li>
                          <a>書架/書擋</a>
                        </li>
                        <li>
                          <a>電視櫃</a>
                        </li>
                        <li>
                          <a>衣櫃/鞋櫃</a>
                        </li>
                        <li>
                          <a>其他家具</a>
                        </li>
                      </ul>
                      <ul className="pb-4">
                        <li className="sub-title text-md text-gray-700 font-bold pb-2">
                          家用電器/用品
                        </li>
                        <li>
                          <a>燈具/燈飾</a>
                        </li>
                        <li>
                          <a>時鐘/鬧鐘</a>
                        </li>
                        <li>
                          <a>電風扇</a>
                        </li>
                        <li>
                          <a>吸塵器</a>
                        </li>
                        <li>
                          <a>其他小家電</a>
                        </li>
                      </ul>
                      <ul className="pb-4">
                        <li className="sub-title text-md text-gray-700 font-bold pb-2">
                          居家清潔
                        </li>
                        <li>
                          <a
                            href="/browse?category=5&amp;subcategory=562&amp;ref_sec=topnavigation"
                            data-sid="562"
                          >
                            衣物清潔
                          </a>
                        </li>
                      </ul>
                      <ul className="pb-4">
                        <li className="sub-title text-md text-gray-700 font-bold pb-2">
                          其他居家生活商品
                        </li>
                        <li>
                          <a>情趣用品</a>
                        </li>
                        <li>
                          <a>防蚊用品</a>
                        </li>
                        <li>
                          <a>其他</a>
                        </li>
                      </ul>
                      <a className="text-md text-gray-700 font-bold pb-2">
                        所有 居家生活
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
