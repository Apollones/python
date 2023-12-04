import { FunctionComponent } from "react";
import {
  BsPersonCircle,BsFillPersonFill,BsFillGearFill,
  BsBoxArrowRight,BsFillKeyFill,BsFillPersonPlusFill,
  BsSearch,BsTelegram,BsDiscord,BsFillBasket2Fill,
  BsFillHeartFill,BsList,BsFillTagsFill,BsPhone,BsTv,BsLaptop,
  BsCarFront,BsFillUmbrellaFill,BsRocket, BsTencentQq, BsDribbble, BsFillHouseFill
} from "react-icons/bs";

const ProductPage: FunctionComponent = () => {
  return (
    
    <div className = "footer">
      <div className="relative bg-white w-full h-[1240px] overflow-hidden text-left text-base z-1 text-black font-inter"> 
        <div className="absolute top-[1180px] left-[0px]" style={{ backgroundColor: "#0C0C0DE5", opacity: 0.9, width: "100vw", height: "60px", overflow: "hidden", color: "white" }}> {/* ось тут відбувається зміна футеру*/}
          <BsTelegram className="absolute top-[14px] left-[1400px] w-8 h-8 object-cover" />
          <BsDiscord className="absolute top-[14px] left-[1460px] w-8 h-8 object-cover" />
            <div className="absolute top-[16px] left-[1218px] inline-block w-[147px] h-7">
              Зв’язатись з нами
            </div>
        </div>
      </div>   

      <div className="relative bg-white w-screen h-[1240px]  text-left text-base text-white font-inter"></div>
      <div className="absolute top-[-1px] left-[-1px] bg-gray-200 box-border w-full h-[45px]  border-[1px] border-solid border-gray-100">
        <div className="absolute top-[250)] left-[calc(50%_-_602px)] text-smi inline-block w-[55px] h-[22px]">
          Каталог
        </div>
        <div className="absolute top-[8px] left-[257px] bg-white w-[625px] h-7  text-[12px] text-black">
          <div className="absolute top-[5px] left-[44px] inline-block w-[242px] h-[19px]">
            <p className="m-0">Search...</p>
          </div>
        </div>
        <img
          className="absolute top-[8px] left-[257px] w-10 h-7 object-cover"
          alt=""
          src="/-20231025-201645904-1@2x.png"
        />
        <img
          className="absolute top-[5px] left-[178px] w-10 h-10 object-cover"
          alt=""
          src="/-20231025-231549064-1@2x.png"
        />
        <div className="absolute top-[15px] left-[18px] text-sm inline-block w-[97px] h-[25px]">{`Головна `}</div>
        <img
          className="absolute top-[6px] left-[1058px] w-8 h-8 object-cover"
          alt=""
          src="/-20231025-233332040-1@2x.png"
        />
        <img
          className="absolute top-[6px] left-[1337px] w-8 h-8 object-cover"
          alt=""
          src="/-20231025-233542519-1@2x.png"
        />
        <div className="absolute top-[12px] left-[1100px] inline-block w-[53px] h-5">
          Кошик
        </div>
        <img
          className="absolute top-[6px] left-[1194px] w-8 h-8 object-cover"
          alt=""
          src="/-20231026-100100373-1@2x.png"
        />
        <div className="absolute top-[12px] left-[1226px] inline-block w-[62px] h-5">
          Обране
        </div>
        <div className="absolute top-[12px] left-[1371px] inline-block w-[65px] h-5">
          Профіль
        </div>
        <img
          className="absolute top-[6px] left-[916px] w-8 h-8 object-cover"
          alt=""
          src="/image-1@2x.png"
        />
        <div className="absolute top-[11px] left-[958px] font-inika inline-block w-[66px] h-5">
          Продаж
        </div>
      </div>
      <img
        className="absolute top-[244px] left-[234px] w-[374px] h-[600px] object-cover"
        alt=""
        src="/image-11@2x.png"
      />
      <img
        className="absolute top-[270px] left-[54px] w-[60px] h-[72px] object-cover"
        alt=""
        src="/image-2@2x.png"
      />
      <img
        className="absolute top-[375px] left-[54px] w-[60px] h-[72px] object-cover"
        alt=""
        src="/image-3@2x.png"
      />
      <img
        className="absolute top-[480px] left-[54px] w-[60px] h-[72px] object-cover"
        alt=""
        src="/image-4@2x.png"
      />
      <img
        className="absolute top-[585px] left-[54px] w-[60px] h-[72px] object-cover"
        alt=""
        src="/image-5@2x.png"
      />
      <img
        className="absolute top-[690px] left-[54px] w-[60px] h-[72px] object-cover"
        alt=""
        src="/image-6@2x.png"
      />
      <div className="absolute top-[168px] left-[64px] text-sm font-inder text-black inline-block w-20 h-[39px]">
        Про товар
      </div>
      <img
        className="absolute top-[204px] left-[0px] w-full h-1"
        alt=""
        src="/line-1.svg"
      />
      <span className="top-[150px] left-[1500px]">Анимешник</span>
      <div className="absolute top-[168px] left-[185px] text-sm font-inder text-black inline-block w-[115px] h-[39px]">
        Характеристики
      </div>
      <div className="absolute top-[123px] left-[54px] text-5xl font-inder text-black inline-block w-[608px] h-[43px]">
        Мікрофон конденсаторний Fifine A8 RGB Black
      </div>
      <div className="absolute top-[880px] left-[787px] rounded-lg bg-gray-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[325px] h-12" />
      <img
        className="absolute top-[259px] left-[1104px] rounded-lg w-[135px] h-14"
        alt=""
        src="/rectangle-2.svg"
      />
      <img
        className="absolute top-[324px] left-[1104px] rounded-lg w-[135px] h-14"
        alt=""
        src="/rectangle-2.svg"
      />
      <img
        className="absolute top-[400px] left-[779px] rounded-lg w-[135px] h-14"
        alt=""
        src="/rectangle-2.svg"
      />
      <img
        className="absolute top-[267px] left-[1193px] w-8 h-8 object-cover"
        alt=""
        src="/-20231026-100100373-2@2x.png"
      />
      <div className="absolute top-[891px] left-[824px] text-5xl inline-block w-[214px] h-[25px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        Додати в кошик
      </div>
      <div className="absolute top-[620px] left-[785px] w-[515px] h-[260px] text-gray-300">
        <img
          className="absolute top-[112px] left-[0px] w-8 h-8 object-cover"
          alt=""
          src="/-20231026-120835655-1@2x.png"
        />
        <div className="absolute top-[110px] left-[34px] inline-block w-[253px] h-[150px]">
          <p className="m-0 text-black">
            <b>Повернення</b>
          </p>
          <p className="m-0">{`Повернення товару відбувається протягом 14 `}</p>
          <p className="m-0">
            днів після покупки, у відповідності із діючим законом.
          </p>
        </div>
        <img
          className="absolute top-[2px] left-[268px] w-8 h-8 object-cover"
          alt=""
          src="/-20231026-120323936-1@2x.png"
        />
        <img
          className="absolute top-[0px] left-[2px] w-8 h-8 object-cover"
          alt=""
          src="/-20231026-115637964-1@2x.png"
        />
        <div className="absolute top-[0px] left-[32px] inline-block w-[217px] h-[84px] text-black">
        <p className="m-0">
            <b> Гарантія</b>
          </p>
          <p className="m-0 text-gray-300">
            <span>
              <span> Сертифікована техніка з</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span> офіційною гарантією від</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span> виробника</span>
              <span className="text-black">.</span>
            </span>
          </p>
        </div>
        <div className="absolute top-[0px] left-[300px] text-sm inline-block w-[215px] h-[70px]">
          <p className="m-0 text-black">
            <b>Оплата</b>
          </p>
          <p className="m-0">Оплатити покупку можливо</p>
          <p className="m-0">готівкою, картою чи</p>
          <p className="m-0">безготівковим розрахунком.</p>
        </div>
      </div>
      <img
        className="absolute top-[891px] left-[1037px] w-8 h-8 object-cover"
        alt=""
        src="/-20231025-233332040-1@2x.png"
      />
      <div className="absolute top-[244px] left-[783px] text-[64px] text-black inline-block w-[225px] h-[63px]">
        <span>1 749₴</span>
      </div>
      <div className="absolute top-[273px] left-[1128px] text-smi inline-block w-[61px] h-[26px]">{`В Обране `}</div>
      <div className="absolute top-[410px] left-[802px] rounded-[50%] bg-gray-300 w-[30.63px] h-7" />
      <div className="absolute top-[410px] left-[861px] rounded-[50%] bg-white w-[30px] h-7" />
      <div className="absolute top-[363px] left-[783px] text-[20px] font-inder text-black inline-block w-[134px] h-[33px]">
        Колір:
      </div>
      <div className="absolute top-[335px] left-[1128px] text-smi inline-block w-[87px] h-7">
        Порівняти
      </div>
      <img
        className="absolute top-[328px] left-[1193px] w-8 h-8 object-cover"
        alt=""
        src="/image-7@2x.png"
      />
    </div>
  );
};

export default ProductPage;