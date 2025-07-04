import React from "react";

const page: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-[3fr_1fr] gap-2">
        {/* product detila section */}
        <div>
          <div className="p-6">
            {/* title */}
            <h2 className="text-[18px] font-bold">
              Cross-border 4748 yards spring white shoes Korean trendy white
              skate shoes casual sneakers fashion versatile casual shoes
            </h2>
            {/* details */}
            <div className="grid grid-cols-[6fr_7fr] rounded-lg gap-8 p-4">
              {/* image section */}
              <div>
                {/* tumbnail */}
                <div className="overflow-hidden max-w-[456px] min-h-[456px]">
                  <div className="cursor-crosshair w-[456px] h-[456px] relative select-none">
                    <img
                      src="https://global-img-cdn.1688.com/img/ibank/O1CN010Dg5iM1kMuZJojbG3_!!2206518654670-0-cib.600x600.jpg"
                      alt="Product Image"
                      className="w-[456px] h-[456px] pointer-events-none max-w-full object-contain"
                    />
                  </div>
                </div>
                {/* photo navigation */}
                <div className="w-full overflow-auto mt-1">
                  <div className="flex flex-row flex-wrap mt-2 items-center">
                    {/* Video Thumbnail */}
                    <div className="relative w-[76px] h-[76px] z-0 mr-2 mb-2">
                      <div className="absolute top-[0.155rem] left-[0.155rem] right-[0.155rem] bottom-[0.155rem] rounded bg-black/35 flex items-center justify-center text-[#e0e0e0] cursor-pointer z-[8]">
                        <img
                          src="/_next/static/media/play.7e02e3b4.svg"
                          alt="Play"
                          className="w-[36px] h-[36px] m-0 p-0"
                        />
                      </div>
                      <img
                        src="https://global-img-cdn.1688.com/img/ibank/O1CN010Dg5iM1kMuZJojbG3_!!2206518654670-0-cib.600x600.jpg"
                        alt="Video Thumbnail"
                        className="relative w-[72px] h-[72px] z-0 p-2 mr-3 mb-3 object-contain"
                      />
                    </div>

                    {/* Sub Images */}
                    {[
                      "https://global-img-cdn.1688.com/img/ibank/O1CN010Dg5iM1kMuZJojbG3_!!2206518654670-0-cib.600x600.jpg",
                      "https://global-img-cdn.1688.com/img/ibank/O1CN01pdrrfS1kMuZMvoYwF_!!2206518654670-0-cib.600x600.jpg",
                      "https://global-img-cdn.1688.com/img/ibank/O1CN01qv2AXF1kMuZM6aUql_!!2206518654670-0-cib.600x600.jpg",
                      "https://global-img-cdn.1688.com/img/ibank/O1CN01tEb5dJ1kMuZKbh9lA_!!2206518654670-0-cib.600x600.jpg",
                      "https://global-img-cdn.1688.com/img/ibank/O1CN01fDdLtb1kMuZM6bRCD_!!2206518654670-0-cib.600x600.jpg",
                    ].map((src, index) => (
                      <div key={index} className="w-[72px] h-[72px] mr-2 mb-2">
                        <img
                          src={src}
                          alt={`Sub Image ${index + 1}`}
                          title="Image"
                          className="w-[46px] h-[46px] p-[0.15rem] object-contain cursor-pointer rounded"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* buttons */}
                <div>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <button className="cursor-pointer mb-4 w-full bg-[#597445] text-white py-2 px-4 rounded">
                      Download Images
                    </button>
                    <button className="cursor-pointer mb-4 w-full bg-[#B43F3F] text-white py-2 px-4 rounded">
                      Original Images
                    </button>
                  </div>
                </div>
              </div>

              {/* details section */}
              <div>
                <div className="detailsSection">
                  <div className="mb1">
                    <b>Color : dark brown</b>
                    <br />
                    <div className="subImageContainer cursor-pointer">
                      <div className="subImages selected">
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src="https://global-img-cdn.1688.com/img/ibank/O1CN01qv2AXF1kMuZM6aUql_!!2206518654670-0-cib.jpg_100x100q90.jpg"
                            alt=""
                            style={{ position: "absolute" }}
                          />
                        </div>
                      </div>
                      <div className="subImages">
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src="https://global-img-cdn.1688.com/img/ibank/O1CN01tEb5dJ1kMuZKbh9lA_!!2206518654670-0-cib.jpg_100x100q90.jpg"
                            alt=""
                            style={{ position: "absolute" }}
                          />
                        </div>
                      </div>
                      <div className="subImages">
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src="https://global-img-cdn.1688.com/img/ibank/O1CN01OcN0Gz1kMuehSyLNV_!!2206518654670-0-cib.jpg_100x100q90.jpg"
                            alt=""
                            style={{ position: "absolute" }}
                          />
                        </div>
                      </div>
                      <div className="subImages">
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src="https://global-img-cdn.1688.com/img/ibank/O1CN01o7kitE1kMueiTtc42_!!2206518654670-0-cib.jpg_100x100q90.jpg"
                            alt=""
                            style={{ position: "absolute" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tableContainer sideScroll">
                    <table id="customers">
                      <tbody>
                        <tr>
                          <th style={{ fontWeight: 600 }}>Size</th>
                          <th style={{ fontWeight: 600 }}>Price</th>
                          <th style={{ fontWeight: 600 }}>Quantity</th>
                        </tr>
                        <tr>
                          <td style={{ width: "100%" }}>
                            <span style={{ wordBreak: "break-all" }}>39</span>
                          </td>
                          <td>
                            <div
                              style={{
                                wordBreak: "keep-all",
                                whiteSpace: "nowrap",
                                minWidth: 70,
                              }}
                            >
                              ৳ 534
                            </div>
                          </td>
                          <td className="flexColumn align-center justify-center">
                            <div>
                              <div
                                className="imageBt bt ripple"
                                style={{ width: 96, height: 28 }}
                              >
                                <span style={{ fontSize: 14 }}>Add</span>
                              </div>
                            </div>
                            <div style={{ marginTop: "0.1rem" }}>
                              <p style={{ fontSize: 11, fontWeight: 600 }}>
                                9636
                              </p>
                            </div>
                          </td>
                        </tr>
                        {/* Repeat for sizes 40 to 48 */}
                        <tr>
                          <td style={{ width: "100%" }}>
                            <span style={{ wordBreak: "break-all" }}>40</span>
                          </td>
                          <td>
                            <div
                              style={{
                                wordBreak: "keep-all",
                                whiteSpace: "nowrap",
                                minWidth: 70,
                              }}
                            >
                              ৳ 534
                            </div>
                          </td>
                          <td className="flexColumn align-center justify-center">
                            <div>
                              <div
                                className="imageBt bt ripple"
                                style={{ width: 96, height: 28 }}
                              >
                                <span style={{ fontSize: 14 }}>Add</span>
                              </div>
                            </div>
                            <div style={{ marginTop: "0.1rem" }}>
                              <p style={{ fontSize: 11, fontWeight: 600 }}>
                                9517
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "100%" }}>
                            <span style={{ wordBreak: "break-all" }}>41</span>
                          </td>
                          <td>
                            <div
                              style={{
                                wordBreak: "keep-all",
                                whiteSpace: "nowrap",
                                minWidth: 70,
                              }}
                            >
                              ৳ 534
                            </div>
                          </td>
                          <td className="flexColumn align-center justify-center">
                            <div>
                              <div
                                className="imageBt bt ripple"
                                style={{ width: 96, height: 28 }}
                              >
                                <span style={{ fontSize: 14 }}>Add</span>
                              </div>
                            </div>
                            <div style={{ marginTop: "0.1rem" }}>
                              <p style={{ fontSize: 11, fontWeight: 600 }}>
                                9028
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "100%" }}>
                            <span style={{ wordBreak: "break-all" }}>42</span>
                          </td>
                          <td>
                            <div
                              style={{
                                wordBreak: "keep-all",
                                whiteSpace: "nowrap",
                                minWidth: 70,
                              }}
                            >
                              ৳ 534
                            </div>
                          </td>
                          <td className="flexColumn align-center justify-center">
                            <div>
                              <div
                                className="imageBt bt ripple"
                                style={{ width: 96, height: 28 }}
                              >
                                <span style={{ fontSize: 14 }}>Add</span>
                              </div>
                            </div>
                            <div style={{ marginTop: "0.1rem" }}>
                              <p style={{ fontSize: 11, fontWeight: 600 }}>
                                8337
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "100%" }}>
                            <span style={{ wordBreak: "break-all" }}>43</span>
                          </td>
                          <td>
                            <div
                              style={{
                                wordBreak: "keep-all",
                                whiteSpace: "nowrap",
                                minWidth: 70,
                              }}
                            >
                              ৳ 534
                            </div>
                          </td>
                          <td className="flexColumn align-center justify-center">
                            <div>
                              <div
                                className="imageBt bt ripple"
                                style={{ width: 96, height: 28 }}
                              >
                                <span style={{ fontSize: 14 }}>Add</span>
                              </div>
                            </div>
                            <div style={{ marginTop: "0.1rem" }}>
                              <p style={{ fontSize: 11, fontWeight: 600 }}>
                                8045
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "100%" }}>
                            <span style={{ wordBreak: "break-all" }}>44</span>
                          </td>
                          <td>
                            <div
                              style={{
                                wordBreak: "keep-all",
                                whiteSpace: "nowrap",
                                minWidth: 70,
                              }}
                            >
                              ৳ 534
                            </div>
                          </td>
                          <td className="flexColumn align-center justify-center">
                            <div>
                              <div
                                className="imageBt bt ripple"
                                style={{ width: 96, height: 28 }}
                              >
                                <span style={{ fontSize: 14 }}>Add</span>
                              </div>
                            </div>
                            <div style={{ marginTop: "0.1rem" }}>
                              <p style={{ fontSize: 11, fontWeight: 600 }}>
                                8296
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "100%" }}>
                            <span style={{ wordBreak: "break-all" }}>45</span>
                          </td>
                          <td>
                            <div
                              style={{
                                wordBreak: "keep-all",
                                whiteSpace: "nowrap",
                                minWidth: 70,
                              }}
                            >
                              ৳ 643
                            </div>
                          </td>
                          <td className="flexColumn align-center justify-center">
                            <div>
                              <div
                                className="imageBt bt ripple"
                                style={{ width: 96, height: 28 }}
                              >
                                <span style={{ fontSize: 14 }}>Add</span>
                              </div>
                            </div>
                            <div style={{ marginTop: "0.1rem" }}>
                              <p style={{ fontSize: 11, fontWeight: 600 }}>
                                8513
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "100%" }}>
                            <span style={{ wordBreak: "break-all" }}>46</span>
                          </td>
                          <td>
                            <div
                              style={{
                                wordBreak: "keep-all",
                                whiteSpace: "nowrap",
                                minWidth: 70,
                              }}
                            >
                              ৳ 643
                            </div>
                          </td>
                          <td className="flexColumn align-center justify-center">
                            <div>
                              <div
                                className="imageBt bt ripple"
                                style={{ width: 96, height: 28 }}
                              >
                                <span style={{ fontSize: 14 }}>Add</span>
                              </div>
                            </div>
                            <div style={{ marginTop: "0.1rem" }}>
                              <p style={{ fontSize: 11, fontWeight: 600 }}>
                                8967
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "100%" }}>
                            <span style={{ wordBreak: "break-all" }}>47</span>
                          </td>
                          <td>
                            <div
                              style={{
                                wordBreak: "keep-all",
                                whiteSpace: "nowrap",
                                minWidth: 70,
                              }}
                            >
                              ৳ 643
                            </div>
                          </td>
                          <td className="flexColumn align-center justify-center">
                            <div>
                              <div
                                className="imageBt bt ripple"
                                style={{ width: 96, height: 28 }}
                              >
                                <span style={{ fontSize: 14 }}>Add</span>
                              </div>
                            </div>
                            <div style={{ marginTop: "0.1rem" }}>
                              <p style={{ fontSize: 11, fontWeight: 600 }}>
                                9421
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "100%" }}>
                            <span style={{ wordBreak: "break-all" }}>48</span>
                          </td>
                          <td>
                            <div
                              style={{
                                wordBreak: "keep-all",
                                whiteSpace: "nowrap",
                                minWidth: 70,
                              }}
                            >
                              ৳ 643
                            </div>
                          </td>
                          <td className="flexColumn align-center justify-center">
                            <div>
                              <div
                                className="imageBt bt ripple"
                                style={{ width: 96, height: 28 }}
                              >
                                <span style={{ fontSize: 14 }}>Add</span>
                              </div>
                            </div>
                            <div style={{ marginTop: "0.1rem" }}>
                              <p style={{ fontSize: 11, fontWeight: 600 }}>
                                9545
                              </p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    style={{
                      borderRadius: 12,
                      border: "1px solid #d0d0d0",
                      marginTop: 10,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        background: "#d9eafd",
                        padding: "6px 12px",
                        display: "flex",
                        gap: 8,
                        alignItems: "center",
                      }}
                    >
                      <svg
                        width={18}
                        height={18}
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M21 12v-1h-4.59L11 6.6a1.5 1.5 0 0 0-1-2.7H6.5a1.5 1.5 0 0 0 0 3H8l1.33 1.33-3.91 3.9a1.5 1.5 0 0 0 0 2.12l6.5 6.5a1.5 1.5 0 0 0 2.12 0l6-6a1.5 1.5 0 0 0 .46-1.08Z"
                          fill="#5B94FF"
                          fillRule="evenodd"
                        />
                      </svg>
                      <span>Shipping Method</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
