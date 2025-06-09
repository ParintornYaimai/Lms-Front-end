import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import Curriculum from "./Curriculum";
import { FaRegFolderOpen } from "react-icons/fa";
import { FiPlayCircle } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

const Enrolle = () => {
  const reviews = [
    {
      name: "Guy Parintorn",
      time: "1 Week ago",
      comment:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, mollitia eaque...",
      rating: 5,
      avatar: "/user.png",
    },
    {
      name: "Jane Doe",
      time: "2 Days ago",
      comment: "This is an amazing product. Highly recommend!",
      rating: 4,
      avatar: "/user.png",
    },
    // เพิ่มข้อมูลได้อีก
  ];
  return (
    <div className="border border-gray-200 shadow-sm">
      {/* Title */}
      <div className="m-3">
        <h1 className="lg:text-3xl font-medium 2xl:block line-clamp-2 pb-3 md:text-xl">
          Complete Website Responsive Design: from Figma to Webflow to Web
          Design
        </h1>
        <p className="lg:text-xl text-gray-500 md:text-sm">
          3 in 1 Course: Learn to design website with Figma, build wit Webflow,
          and makea living freelanceing.
        </p>
      </div>

      {/*Content*/}
      <div className="flex flex-col item-center justify-center m-3">
        {/*Author  */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center justify-center gap-2">
            <div className="lg:w-15 lg:h-15 relative rounded-full overflow-hidden md:h-9 md:w-9">
              <Image
                src="/user.png"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/images/profile-blur.jpg"
              />
            </div>
            <div className="flex flex-col items-start justify-center md:text-sm">
              <span>Create by:</span>
              <span>
                Parintorn Yaimai •{" "}
                <span className="text-gray-600">Professor</span>
              </span>
            </div>
          </div>

          {/* rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center gap-1">
              <FaStar size={20} className="text-orange-400" />
              <FaStar size={20} className="text-orange-400" />
              <FaStar size={20} className="text-orange-400" />
              <FaStar size={20} className="text-orange-400" />
              <FaStar size={20} className="text-orange-400" />
            </div>
            <span className="text-gray-600">4.7 (32,325 Rating) </span>
          </div>
        </div>

        {/* Picture & Video*/}
        <div className="w-full lg:h-[700px] sm:h-[250px] md:h-[300px] relative  overflow-hidden mt-4 shadow-sm p-10">
          <Image
            src="/food.jpg"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="/images/profile-blur.jpg"
          />
        </div>

        {/* toggle mode section*/}
        <div className=" flex items-center justify-around my-4 border border-gray-200">
          <span className="px-10 py-4 border-b-2 border-orange-600 cursor-pointer">
            Overview
          </span>
          <span className="px-10 py-4 cursor-pointer">Curriculum</span>
          <span className="px-10 py-4 cursor-pointer">Instructor</span>
          <span className="px-10 py-4 cursor-pointer">Review</span>
        </div>

        {/* Description */}
        <div className="p-1">
          <div className="mb-2">
            <h1 className="text-2xl font-medium">Description</h1>
          </div>
          <div className="my-2">
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              perspiciatis hic provident a, maxime assumenda culpa sapiente,
              nobis vel voluptas itaque! Quos ipsam inventore facere tenetur
              laudantium deserunt incidunt ut, ea aspernatur, officiis qui est
              ab natus consectetur! Sint laboriosam reprehenderit omnis quo sit
              possimus repudiandae aliquid doloribus laborum ipsa, ab distinctio
              ut dolores optio cupiditate facere recusandae at, quis iure cum!
              Dolorem praesentium reiciendis, eius eveniet facilis voluptatum
              possimus nobis debitis. Quod assumenda laboriosam quasi incidunt
              harum, accusamus numquam, quia molestias vel maiores enim. Officia
              nobis asperiores expedita facere! Quasi, excepturi ut! Hic ipsam
              porro dolore soluta maiores quis qui minus repudiandae animi
              voluptate. Cumque minima exercitationem quia adipisci illum iusto
              fugiat eaque eos impedit. Hic minus fugit voluptas praesentium
              nemo voluptatibus a illo nulla deserunt eveniet, maxime
              accusantium fuga ad illum, repellat neque in aut velit officiis
              quibusdam laudantium! Eius temporibus beatae ipsam et facere
              dolore aut fugiat nulla ut ducimus. Mollitia voluptatem eum animi
              iure adipisci itaque sit vel saepe, dolor nisi ex veniam est.
              Facere sit hic ex perspiciatis ipsa impedit reprehenderit, at
              officia magnam consectetur nulla blanditiis modi molestiae facilis
              aspernatur sed incidunt repellendus excepturi! Perspiciatis
              possimus rerum optio aspernatur architecto laborum est sit porro
              error quibusdam quasi reiciendis ab sunt cumque saepe, earum autem
              ipsum eos iure illo tempora quo! Explicabo qui, odit, architecto
              tenetur veniam voluptatum recusandae tempora sint temporibus iure
              mollitia unde. Fugiat harum, perspiciatis adipisci et cumque ad
              aut sequi reiciendis culpa corporis soluta autem illum architecto
              quia. Nisi beatae in iusto, architecto aliquid hic sunt tempore,
              asperiores soluta vitae repudiandae adipisci cum? Reiciendis in
              ipsa consectetur optio totam eveniet. Quisquam a neque sapiente
              quo dolorem, repellendus autem facere, eaque corporis
              exercitationem et excepturi ullam explicabo, vitae illum quam
              ratione eligendi? Labore exercitationem aperiam, expedita error
              soluta eius rerum temporibus ratione eos qui. Totam voluptas harum
              et ratione eligendi delectus explicabo, unde deleniti vel? Natus
              maxime porro iste amet dolorum perferendis dolore, adipisci eos?
              Qui ad eius nam eum repellat eaque enim facilis, odio quae
              laboriosam, fugit quisquam nostrum. Quam libero tempore eaque.
              Esse inventore corrupti commodi voluptatibus enim obcaecati
              recusandae, consectetur delectus eaque, ipsa quidem architecto ea
              dolorem quo, odit optio nobis ab itaque natus? Blanditiis
              dignissimos dolore, sed, eos ipsa ipsam, commodi quisquam
              reiciendis voluptas possimus cum voluptatem porro doloremque
              eveniet! Suscipit enim consequatur minus ipsum explicabo expedita
              aliquam fugit quam eaque vel delectus iure totam dolores aut
              laborum maxime, est laudantium laboriosam atque omnis dicta
              provident itaque repudiandae tempore. Hic magni perspiciatis
              blanditiis voluptate ipsa eaque vel porro veritatis. Aperiam
              tempore dolor, harum itaque ad quia aut iste modi officia maiores
              enim esse aliquid dolore earum pariatur facilis accusamus adipisci
              vero doloremque quis ullam vitae quod possimus commodi. Totam
              nesciunt nisi quibusdam suscipit voluptatibus sequi odio quidem
              tenetur unde magnam ratione harum rem perferendis placeat
              accusamus laborum dolorem aspernatur fugiat doloribus porro,
              voluptatum mollitia adipisci quam ipsa? Iste velit pariatur iure
              molestiae doloremque ea, dolorum asperiores saepe rem voluptatum
              ex autem omnis illo magni. Ducimus modi cupiditate possimus nam
              consequatur, excepturi esse aliquam est dicta labore ullam atque
              architecto optio cum fuga animi dignissimos qui voluptatem
              corrupti. Ipsa molestiae suscipit minima perspiciatis ducimus
              optio enim voluptates iusto commodi cupiditate, odio sed numquam
              tenetur harum maxime quos, possimus vel, velit saepe? Dolor
              voluptatem perspiciatis, dolore consequuntur nobis ex neque illum
              et amet quos tempora fugiat quae quaerat a esse sapiente odit iure
              nisi sit tempore temporibus, similique facilis magnam quas!
              Perspiciatis animi sed culpa, ipsam blanditiis, quo facere
              molestiae, laborum facilis necessitatibus beatae eaque perferendis
              unde reiciendis officia quaerat iure ex atque fugiat! Eaque
              similique eum iure? Minus nesciunt suscipit illum reprehenderit
              pariatur esse voluptatem laborum enim quas, ex, dolore quibusdam
              reiciendis obcaecati officiis animi dolor quasi quod provident
              ullam eius, doloribus placeat sunt. Repellat, delectus eius. Odit
              cum quisquam corporis rerum. Tempore, voluptatum quidem repellat
              maxime quasi magnam recusandae ratione sunt rerum omnis adipisci
              voluptatibus nihil non sequi molestiae. Qui illo accusamus hic
              deserunt, incidunt perferendis, nostrum sed, temporibus vitae
              omnis voluptatum tempora cupiditate repudiandae itaque aspernatur
              minus? Iure unde tempore veniam, quis mollitia vel ratione dolore
              dolorum hic illo, modi, maxime eum ducimus quasi est? Distinctio,
              eos. Autem voluptates similique inventore dignissimos placeat et
              quisquam blanditiis nemo magni maxime. Provident, incidunt cumque?
              Molestias corporis provident velit cum! Tenetur dolorum quaerat
              deleniti dignissimos harum eius sunt suscipit molestiae ratione
              error, aspernatur corrupti, ut similique aperiam veritatis
              voluptatum illum perferendis delectus? Sit tenetur veritatis et
              harum libero eligendi minima in, est dignissimos odio asperiores,
              id error at voluptas dolor sed explicabo veniam eum adipisci alias
              accusantium? Non perferendis, voluptate quasi eos nemo beatae
              nostrum quod tenetur? Consequatur deserunt quos rem temporibus ab
              laborum, natus id, dolor doloribus, sapiente similique illo
              voluptatem quis repellendus blanditiis dolorum quibusdam est eos
              in voluptate necessitatibus minus porro? Doloremque tempora sequi
              omnis, possimus eaque unde error suscipit impedit dolorum sit odio
              non sapiente reprehenderit soluta iste natus nostrum voluptatem
              id, saepe sint voluptatibus. A temporibus corporis asperiores
              soluta iure harum aut, veniam, neque est, laboriosam vero iste?
              Veritatis ducimus, tempore omnis consequuntur ut temporibus modi
              eligendi aspernatur praesentium pariatur ipsum commodi est
            </p>
          </div>

          <div className="p-4 bg-green-50">
            <h1 className="text-2xl mb-4">
              What you will learn in this course
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-gray-600">
              <div className="flex items-start gap-2">
                <div>
                  <BsCheckCircleFill size={20} className="text-green-500" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div>
                  <BsCheckCircleFill size={20} className="text-green-500" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div>
                  <BsCheckCircleFill size={20} className="text-green-500" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div>
                  <BsCheckCircleFill size={20} className="text-green-500" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div>
                  <BsCheckCircleFill size={20} className="text-green-500" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div>
                  <BsCheckCircleFill size={20} className="text-green-500" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div>
                  <BsCheckCircleFill size={20} className="text-green-500" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div>
                  <BsCheckCircleFill size={20} className="text-green-500" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                </p>
              </div>
            </div>
          </div>

          {/* Who this course is for: */}
          <div className="mt-5 ">
            <div>
              <h1 className="text-2xl ">Who this course is for:</h1>
            </div>
            <div className="my-5 space-y-3 px-2 text-gray-600">
              <div className="flex items-center gap-2">
                <FaArrowRightLong size={20} className="text-orange-600" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nulla, doloribus!
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowRightLong size={20} className="text-orange-600" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nulla, doloribus!
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowRightLong size={20} className="text-orange-600" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nulla, doloribus!
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowRightLong size={20} className="text-orange-600" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nulla, doloribus!
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowRightLong size={20} className="text-orange-600" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nulla, doloribus!
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowRightLong size={20} className="text-orange-600" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nulla, doloribus!
                </p>
              </div>
            </div>
          </div>

          {/* Course requirements */}
          <div className="mt-5 ">
            <div>
              <h1 className="text-2xl ">Course requirements</h1>
            </div>
            <div className="my-5 space-y-3 px-2 text-gray-600">
              <div className="flex items-start gap-2">
                <span>•</span>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corrupti laborum vero velit facilis magnam provident.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span>•</span>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corrupti laborum vero velit facilis magnam provident.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span>•</span>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corrupti laborum vero velit facilis magnam provident.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span>•</span>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corrupti laborum vero velit facilis magnam provident.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span>•</span>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corrupti laborum vero velit facilis magnam provident.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span>•</span>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corrupti laborum vero velit facilis magnam provident.
                </p>
              </div>
            </div>
          </div>

          {/* Curriculum */}
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <h1 className="text-2xl font-medium">Curriculum</h1>
              </div>
              <div className="flex items-center justify-end">
                {/* sections */}
                <div className="flex items-center gap-1">
                  <div>
                    <FaRegFolderOpen size={20} className="text-orange-500" />
                  </div>
                  <div>
                    <span className="text-gray-600">6 sections</span>
                  </div>
                </div>

                {/* lecture */}
                <div className="flex items-center gap-1 mx-5">
                  <div>
                    <FiPlayCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <span className="text-gray-600">202 lecture</span>
                  </div>
                </div>

                {/* time */}
                <div className="flex items-center gap-1">
                  <div>
                    <LuClock3 size={20} className="text-orange-400" />
                  </div>
                  <div>
                    <span className="text-gray-600">19h 32m</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Curriculum />
            </div>
          </div>

          {/* Students Feedback  */}
          <div>
            {/* Headder */}
            <div className="flex items-center justify-between mt-5">
              <div>
                <h1 className="text-2xl font-medium">Students Feedback </h1>
              </div>
              <div className="flex items-center gap-3 text-gray-500 w-full sm:w-auto ">
                <div className="relative flex items-center border border-gray-300 py-1 w-full sm:w-auto cursor-pointer">
                  <select className="appearance-none pr-8 pl-4 py-1 w-full sm:w-auto text-md focus:outline-none mr-10 cursor-pointer">
                    <option value="Latest">5 Star Rating</option>
                    <option value="Oldest">4 Star Rating</option>
                    <option value="Latest">3 Star Rating</option>
                    <option value="Oldest">2 Star Rating</option>
                    <option value="Latest">1 Star Rating</option>
                  </select>
                  {/* custom arrow */}
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <IoIosArrowDown />
                  </div>
                </div>
              </div>
            </div>

            {/* content */}
            <div className="mt-5">
              {reviews.map((review, index) => (
                <div key={index} className="border-b border-gray-200 mb-5 pb-5">
                  {/* profile */}
                  <div className="flex items-center justify-start gap-3">
                    <div className="lg:w-10 lg:h-10 relative rounded-full overflow-hidden md:h-9 md:w-9 border">
                      <Image
                        src={review.avatar}
                        alt="Profile Picture"
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL="/images/profile-blur.jpg"
                      />
                    </div>
                    <div>
                      <span>
                        {review.name}
                        <span className="pl-3 text-xs text-gray-500">
                          {review.time}
                        </span>
                      </span>
                      <div className="flex items-center mt-2">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <FaStar
                            key={i}
                            size={20}
                            className="text-orange-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Comment */}
                  <div className="ml-13 my-2">
                    <p>{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enrolle;
