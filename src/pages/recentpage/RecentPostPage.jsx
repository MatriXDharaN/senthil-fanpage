import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./RecentPostPage.css";

import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.jpg";
import img8 from "../../assets/images/img8.jpg";
import img9 from "../../assets/images/img9.jpg";

const RecentPostPage = () => {
  const params = new URLSearchParams(useLocation().search);
  const id = Number(params.get("id"));

  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const [direction, setDirection] = useState("next"); // "next" | "prev"

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ================= DATA ================= */

  const recentPostsData = {
    1: {
      title: "கழக பணிகளுக்கான புதிய அலுவலகத்தை திறந்து வைத்தார்",
      category: "கவுண்டம்பாளையம்",
      images: [
        { src: img1, caption: "புதிய அலுவலகம் திறப்பு" },
        { src: img2, caption: "புதிய அலுவலகம் திறப்பு" },
      ],
      content: `
      <h2>கழக பணிகளுக்கான புதிய அலுவலகத்தை திறந்து வைத்தார்</h2>
      <p>
        கழகத் தலைவர், மாண்புமிகு தமிழ்நாடு முதலமைச்சர் தளபதி M. K. Stalin அவர்களின் நல்லாசியுடன்,
        இன்று கோவை வடக்கு மாவட்டம் கவுண்டம்பாளையம் சட்டமன்ற தொகுதியில்,
        கழக பணிகளுக்கான புதிய அலுவலகத்தை திறந்து வைத்தார்.
      </p>
    `,
    },

    2: {
      title: "நூறுநாள் வேலைத் திட்டத்தில் மாற்றம்",
      category: "கரூர்",
      images: [
        { src: img3, caption: "நூறுநாள் வேலைத் திட்டம்" },
        { src: img4, caption: "நூறுநாள் வேலைத் திட்டம்" },
        { src: img5, caption: "நூறுநாள் வேலைத் திட்டம்" },
        { src: img6, caption: "நூறுநாள் வேலைத் திட்டம்" },
      ],
      content: `
          <h2>மத்திய அரசைக் கண்டித்து திமுக கூட்டணியினர் ஆர்ப்பாட்டம்</h2>
          <p>கரூர் வெண்ணைமலை ஊராட்சி ஒன்றிய அலுவலகம் முன் புதன்கிழமை நடைபெற்ற ஆர்ப்பாட்டத்தில் பேசிய கரூர் சட்டப்பேரவை உறுப்பினர் வி. செந்தில்பாலாஜி.</p>

          <p>நூறு நாள் வேலைத் திட்டத்தை சீா்குலைக்கும் வகையில் மாற்றியமைத்துள்ள மத்திய அரசைக் கண்டித்து கரூரில் திமுக கூட்டணியினா் புதன்கிழமை ஆா்ப்பாட்டத்தில் ஈடுபட்டனா்.</p>

          <p>நூறு நாள் வேலைத் திட்டத்தில் மகாத்மா காந்தியின் பெயரை நீக்கியதோடு, திட்டத்தையே சீா்குலைக்கும் வகையில் மாற்றியமைத்துள்ள மத்திய அரசைக் கண்டித்தும்,

புதிய சட்டத்தை திரும்பப் பெறக் கோரியும் கரூரில் ஊராட்சி ஒன்றிய அலுவலகம் முன் ஆா்ப்பாட்டம் நடைபெற்றது.</p>

          <p>ஆா்ப்பாட்டத்துக்கு கரூா் சட்டப்பேரவை உறுப்பினா் வி. செந்தில்பாலாஜி தலைமை வகித்து பேசுகையில், ஒன்றிய அரசால் தமிழகத்துக்கு இதுவரை எந்த ஒரு நன்மையும் இல்லை. 
            நமக்கு வழங்க வேண்டிய நிதியைக்கூட தராமல் மாற்றாந்தாய் மனப்பான்மையோடு செயல்படுகிறது.</p>
          <p>நூறு நாள் வேலைத் திட்டத்துக்கு ஒன்றிய அரசு வழங்க வேண்டிய நிதியை நிலுவையில் வைத்துள்ள நிலையில், தற்போது இந்த திட்டத்தை முற்றிலும் ஒழிக்கும் வகையில் புதிய சட்டத்தை கொண்டுவந்துள்ளது.</p>
          <p>தமிழகத்தில் 92 லட்சம் பேரை இந்த திட்டத்தில் நீக்குவதற்கான சதியை ஒன்றிய அரசு செய்து வருகிறது என்றாா் அவா்.

ஆா்ப்பாட்டத்தில் மாவட்ட துணைச் செயலாளா் மின்னாம்பள்ளி கருணாநிதி, கரூா் முன்னாள் ஒன்றியக் குழுத் தலைவா் பாலமுருகன், ஒன்றிய நிா்வாகி முத்துக்குமாரசாமி,
 கொமதேக மாநில நிா்வாகி விசா ம. சண்முகம் மற்றும் கூட்டணி கட்சி நிா்வாகிகள் திரளாக பங்கேற்றனா்.</p>
        `,
    },

    3: {
      title: "கிறிஸ்துமஸ் ஆராதனை விழாவில் பங்கேற்பு",
      category: "கரூர், தான்தோன்றிமலை",
      images: [
        { src: img7, caption: "" },
        { src: img8, caption: "" },
        { src: img9, caption: "" },
      ],
      content: `
      <h2>கிறிஸ்துமஸ் ஆராதனை விழாவில் பங்கேற்பு</h2>
      <p>
        கரூர் தான்தோன்றிமலை சி.எஸ்.ஐ ஆலயத்தில் நடைபெற்ற
        கிறிஸ்துமஸ் ஆராதனை விழாவில் கலந்து கொண்டு
        கிறிஸ்துவ சொந்தங்களுக்கு வாழ்த்துகள் தெரிவித்தனர்.
      </p>
    `,
    },

    4: {
      title: "கரூர் மாவட்ட கழக நிர்வாகிகள் ஆலோசனைக் கூட்டம்",
      category: "கரூர்",
      images: [
        {
          src: "https://scontent.fmaa14-1.fna.fbcdn.net/v/t39.30808-6/604529840_1447474826740092_7585565099881076466_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mH6TxQ2CO8EQ7kNvwF7jQxn&_nc_oc=AdnaKjE4OQrg42aUlawuxvYNLZMYpxriSPOJ0T6WdPVgOYN3YRiT433fqAygGwCqTqOa1WU1U11xsleOVi1pi7Tg&_nc_zt=23&_nc_ht=scontent.fmaa14-1.fna&_nc_gid=mFsvZxmSRqVt4YX04csxPA&oh=00_Afmj_i9AtWTfKM22yxbWFh-S0yL0fJGH4nTkQr5oXD2cFw&oe=69540F3A",
          caption: "",
        },
        {
          src: "https://scontent.fmaa14-1.fna.fbcdn.net/v/t39.30808-6/599673195_1447474810073427_3635531878101486490_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=q98hIumaLRsQ7kNvwEhRdmE&_nc_oc=Admm2R_nWa24xgOm6xLbMnp9NWkN5lG72uBCWfaULsRwWlhhpJzh7-OtDFWU2X-AT-0cVZ7y2xPepeHi-vXNpToL&_nc_zt=23&_nc_ht=scontent.fmaa14-1.fna&_nc_gid=dtCzVKkJ9slq_WcTbEzJAg&oh=00_Afllcq9LIJaa78SNLzh3fP2SzQiuHaq1V_5DTlpzdJJR-w&oe=69541648",
          caption: "",
        },
        {
          src: "https://scontent.fmaa14-1.fna.fbcdn.net/v/t39.30808-6/600291656_1447474846740090_5859908690971670026_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=COplOQp7gBUQ7kNvwFIrv3a&_nc_oc=AdmSkh_Qq-BkfePxEFxj7n6dO_RZTZwwdenh0EfcSS1nbiSAvEptwApvjTDmiZQZkBz70X39cNtoLcsREP25jm-l&_nc_zt=23&_nc_ht=scontent.fmaa14-1.fna&_nc_gid=ZmE18srYl2ckXVSTk_pdhw&oh=00_AfmRewS5uuSkZil2JbBaXfeqg3f0hFMO9lm4Qlt94P3ffQ&oe=695407A5",
          caption: "",
        },
      ],
      content: `
      <h2>கரூர் மாவட்ட கழக நிர்வாகிகள் ஆலோசனைக் கூட்டம்</h2>
      <p>
        கழகத் தலைவர் மாண்புமிகு தமிழ்நாடு முதலமைச்சர் அவர்களின்
        ஆணைக்கிணங்க கரூர் கலைஞர் அறிவாலயத்தில் நடைபெற்றது.
      </p>
    `,
    },

    5: {
      title: "தமிழ்நாடு துணை முதலமைச்சர், 49வது பிறந்தநாள்",
      category: "கரூர்",
      images: [
        {
          src: "https://scontent.fmaa14-1.fna.fbcdn.net/v/t39.30808-6/600366517_1447667106720864_8173601275563842335_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=E7CvJdKXAk0Q7kNvwHsLLZR&_nc_oc=AdlMoGUm1B5-iEcaDV16i2V5tnavVMDAhak3zh1oxLaLGUCx_BQ8MBqKyOO3EmriBslfni837RykdYa0u_wVpUgH&_nc_zt=23&_nc_ht=scontent.fmaa14-1.fna&_nc_gid=i-7wPQajIlllE-VLWHfOyQ&oh=00_Afm6EOkHBMiapfUiIGiwBF8vP5ffAR7PZvRAj4Umc7KTOA&oe=695421EE",
          caption: "",
        },
        {
          src: "https://scontent.fmaa14-1.fna.fbcdn.net/v/t39.30808-6/603897969_1447666326720942_4162124258089240635_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bjrZfBAy9-4Q7kNvwEfDM2w&_nc_oc=Adl5QavyK8W-Op9bxZ_1V8gjZawJmVnwA6JCJSHHb4AplDlL4VVG9DMEEBAKwn1D73OafSBzf1xq0ReuSNcQNrit&_nc_zt=23&_nc_ht=scontent.fmaa14-1.fna&_nc_gid=HpRui2ViMtt2z5SXgVgp4A&oh=00_AfmvNeDUNZEz3ubQZXo0awvQ-2CSWQsbqNfTdHXwUYLvWg&oe=6954198F",
          caption: "",
        },
        {
          src: "https://scontent.fmaa14-1.fna.fbcdn.net/v/t39.30808-6/600521010_1447667163387525_7504545385999716903_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SZoPsvn6ZW4Q7kNvwEXz-3y&_nc_oc=AdmYYanphYgguTyEROUPfHvShlkgEOBGZN2Klir1fJokWFoMA7b7g6bznZmvP98HOqs2Loplrbx7kJ8T2Cm1DDnu&_nc_zt=23&_nc_ht=scontent.fmaa14-1.fna&_nc_gid=xUxeIwvcIqVVgTIE4-BYpQ&oh=00_AfkJV2tqTpgSH0M1bLvTtGxU4Vh8KMdk9acPtdeEaMvmUQ&oe=695437D7",
          caption: "",
        },
        {
          src: "https://scontent.fmaa14-1.fna.fbcdn.net/v/t39.30808-6/600303559_1447667633387478_7423146965047535514_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YzDKGsEDpK8Q7kNvwGm-rnX&_nc_oc=AdnyKRHlHIJ-TIh2DIGuhD5qyQfbXANtgphkTiHP51mXdZcuVT97kcBweUtu4QQVbJLtw11A89vgOCo1AMbXkGSx&_nc_zt=23&_nc_ht=scontent.fmaa14-1.fna&_nc_gid=QBDXMh4PH3Zegfdbtagagg&oh=00_AfmxBZHr_swFbzD0BA7i5Gk2WRPca2Ma9s6BWgi67mkd5Q&oe=69543BDD",
          caption: "",
        },
      ],
      content: `
          <h2>தமிழ்நாடு துணை முதலமைச்சர், 49வது பிறந்தநாள்</h2>
          <p>மாண்புமிகு தமிழ்நாடு துணை முதலமைச்சர், பண்பின் பேருருவம் Udhayanidhi Stalin அவர்களின் 49வது பிறந்த நாளை முன்னிட்டு, 
            கரூர் மாவட்ட கழகத்தின் சார்பாக, மொத்த பரிசுத்தொகை ரூ 2,05,000/- மற்றும் கோப்பைகளுக்கான, மாவட்ட அளவிலான ஆண்கள் கிரிக்கெட் போட்டிகள், கடந்த 13.12.2025 சனிக்கிழமை துவங்கி, இன்று கரூர் திருவள்ளுவர் விளையாட்டு மைதானத்தில் காலிறுதி, அரையிறுதி மற்றும் இறுதிப்போட்டி  நடைபெற்றது</p>

         
          <p>முதல் பரிசை பால்மடைப்பட்டி STYEN 11 அணியும், இரண்டாவது பரிசை பாண்டியன் பாய்ஸ் அணியும், மூன்றாவது பரிசை வேலாயுதம்பாளையம் சரவணா பிரதர்ஸ் அணியும், நான்காம் பரிசை தாந்தோனி ICC அணியும் வென்றனர்.</p>
          
         
          <p>சிறந்த பேட்ஸ்மேன் விருதை STYEN 11 அணியை சேர்த்த தம்பி சுகுந்தன் அவர்களும், சிறந்த பவுலருக்கான விருதை பாண்டியன் பாய்ஸ் அணி வீரர் தம்பி கனகராஜ் அவர்களும், சிறந்த ஆல்ரவுண்டருக்கான விருதை STYEN 11 அணியை சேர்த்த தம்பி காமராஜ் அவர்களும் வென்றனர்</p>
          
          
          <p>கலந்துக் கொண்ட அனைத்து அணி வீரர்களுக்கும் எனது மனமார்ந்த பாராட்டுக்களையும், வென்ற அணிகளுக்கும் வீரர்களுக்கும் எனது அன்பான வாழ்த்துகளை தெரிவித்துக் கொண்டார்கள்</p>
          
        `,
    },

    6: {
      title: "மகளிர் அணி மாநாட்டிற்கு பந்தல்கால் நடுவிழா",
      category: "பல்லடம்",
      images: [
        {
          src: "https://scontent.fmaa14-1.fna.fbcdn.net/v/t39.30808-6/601847906_1448081093346132_4650418602970348357_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=i1qYPmKc4ZEQ7kNvwE3_CQ3&_nc_oc=AdnV4qsdOCLgQmSA7G1fx9Kg6mz0B64JINeNLc0-AFtlHbOc9ONM_-8HdGUp48460gxNBlAAfhsAom_YshihRx10&_nc_zt=23&_nc_ht=scontent.fmaa14-1.fna&_nc_gid=vIFeEoaKrIO0ggmNzhnB2A&oh=00_AflZGJnoy_6T9pNIt2O6SfCjsviYPDdy8f1sy03u8Zckjg&oe=69540A57",
          caption: "",
        },
        {
          src: "https://scontent.fmaa14-1.fna.fbcdn.net/v/t39.30808-6/599954331_1447702833383958_2882067946175991392_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ak9OfNRGxpAQ7kNvwGApv8y&_nc_oc=Adn8imjjbh1tT5GZ9kK-pIalQPt_Vx-OI7q3Aues1HieYR2RLgSG38WZvGOsIx58hxlCwBUeWtohobyvO83PF6lQ&_nc_zt=23&_nc_ht=scontent.fmaa14-1.fna&_nc_gid=mUPsz_LnuqJ6CzowlZQM0A&oh=00_AfnWFB3aqbXenjheJTe4AHTDv4FTGMxUDu0NPaN01zOQVQ&oe=69541179",
          caption: "",
        },
        {
          src: "https://scontent.fixm4-4.fna.fbcdn.net/v/t39.30808-6/600900742_1447702733383968_343813684156696343_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ld_ocK3piqAQ7kNvwEBKfmC&_nc_oc=AdnEDFrUhUuSZgzvJV9QZRBQq5K77ER8C8On3DXQv6afr09dNjz-tyELrbOvleDEHRodx5nbnemxuBvT5ULsNu_n&_nc_zt=23&_nc_ht=scontent.fixm4-4.fna&_nc_gid=_8ECF2kcInZwiwJlQZkDkw&oh=00_Aflcm1rPP7wuAu0tPCJDlog-xJIexHo3dZGWUVDkXwt4Kw&oe=695411D2",
          caption: "",
        },
      ],

      content: `
          <h2>வெல்லும் தமிழ்ப் பெண்கள்</h2>
          <p>“வெல்லும் தமிழ்ப் பெண்கள்” தி.மு.க. மேற்கு மண்டல மகளிர் அணி மாநாடு நடைபெறுவதையொட்டி, விழாவுக்கான பந்தல்கால் நடுவிழா</p>

          <p>கழகத் தலைவர் மாண்புமிகு தமிழ்நாடு முதலமைச்சர் தளபதி M. K. Stalin அவர்களின் ஆணைக்கிணங்க, வருகின்ற 29.12.2025 திங்கட்கிழமை அன்று, திருப்பூர் மாவட்டம், பல்லடத்தில்,  “வெல்லும் தமிழ்ப் பெண்கள்” தி.மு.க. மேற்கு மண்டல மகளிர் அணி மாநாடு நடைபெறுவதையொட்டி, விழாவுக்கான பந்தல் அமைக்கும் பணிகள் இன்று தொடங்கப்பட்டது</p>

          
          <p>மாண்புமிகு வீட்டு வசதித் துறை அமைச்சர் அண்ணன் சு.முத்துசாமி அவர்கள், மாண்புமிகு செய்தித் துறை அமைச்சர் அண்ணன் மு.பெ . சாமிநாதன் அவர்கள், மாண்புமிகு மனிதவள மேலாண்மைத்துறை அமைச்சர் திருமிகு. என். கயல்விழி செல்வராஜ் அவர்கள், மாண்புமிகு மக்களவை உறுப்பினர்கள், கழக மாவட்டச் செயலாளர்கள்,  மாண்புமிகு சட்டமன்ற உறுப்பினர்கள்,  மாநில மகளிர் அணி நிர்வாகிகள், தொகுதி பொறுப்பளர்கள், மேற்கு மண்டல கழக நிர்வாகிகள் மற்றும் தொண்டர்கள் கலந்து கொண்டார்கள்.</p>

        `,
    },
  };

  const data = recentPostsData[id];

  /* ================= AUTO SLIDE ================= */

  useEffect(() => {
    if (!data) return;

    const timer = setInterval(() => {
      setPrevSlide(currentSlide);
      setCurrentSlide((prev) =>
        prev === data.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [currentSlide, data]);

  /* ================= CONTROLS ================= */

  const nextSlide = () => {
    setDirection("next");
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev === data.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlideFn = () => {
    setDirection("prev");
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev === 0 ? data.images.length - 1 : prev - 1));
  };

  if (!data) {
    return (
      <div className="details-container">
        <h1>Post Not Found</h1>
        <Link to="/" className="back-btn">
          Back
        </Link>
      </div>
    );
  }

  /* ================= RENDER ================= */

  return (
    <>
      <div className="details-container">
        <Link to="/" className="back-btn">
          Back
        </Link>

        <div className="details-header">
          <span className="details-tag">{data.category}</span>
          <h1>{data.title}</h1>
        </div>

        {/* ===== SLIDER (Gallery2 Style) ===== */}
        <div className="image-slider">
          <div className="slider-container">
            {/* PREVIOUS IMAGE */}
            <div
              key={prevSlide}
              className={`slide-img ${
                direction === "next" ? "slide-out-left" : "slide-out-right"
              }`}
              style={{
                backgroundImage: `url(${data.images[prevSlide].src})`,
              }}
            />

            {/* CURRENT IMAGE */}
            <div
              key={currentSlide}
              className={`slide-img ${
                direction === "next" ? "slide-in-right" : "slide-in-left"
              }`}
              style={{
                backgroundImage: `url(${data.images[currentSlide].src})`,
              }}
            />

            {/* CAPTION */}
            {data.images[currentSlide].caption && (
              <div className="slide-caption">
                <p>{data.images[currentSlide].caption}</p>
              </div>
            )}

            {/* ARROWS */}
            <button className="slider-arrow prev" onClick={prevSlideFn}>
              ❮
            </button>
            <button className="slider-arrow next" onClick={nextSlide}>
              ❯
            </button>

            {/* DOTS */}
            <div className="slider-nav">
              {data.images.map((_, i) => (
                <div
                  key={i}
                  className={`slider-dot ${i === currentSlide ? "active" : ""}`}
                  onClick={() => {
                    setPrevSlide(currentSlide);
                    setCurrentSlide(i);
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ===== CONTENT ===== */}
        <div
          className="details-content"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>

      <footer>
        <p>© 2025 Minister Fan Page | Not an Official Website</p>
      </footer>
    </>
  );
};

export default RecentPostPage;
