import React, { useState } from "react";
import ScrollBox from './Scrollbox';
import "./Gallcomp.css";

const galleryData = {
  "முதல்வருடன் சந்திப்பு": [
    { title: "", img: "https://files.prokerala.com/news/photos/imgs/1024/v-senthil-balaji-meets-cm-m-k-stalin-1798963.jpg" },
    { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/559972569_1389182565902652_2863091260229752141_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=e3zsBZ-bkZIQ7kNvwGg4h6Q&_nc_oc=Adnq1kxK5N6P5wRQAl523LcOsP98UxTINKipBfuGI1TbkGBr7ffyg7tM2kB9YVR7F-yIxnacMuPwxplT50-_mGWT&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=TtzdKxmuQBNxmKLZABHYiQ&oh=00_AfnZRscOs2l26FUVpsc0vhx7M0bN6ZVMbiAi_mFgqcBUOg&oe=69543261" },
    { title: "", img: "https://static.langimg.com/photo/imgsize-54220,msid-94131335/tamil-samayam.jpg" },
    { title: "", img: "https://tamilimages.timesnownews.com/thumb/msid-113691097,width-1280,height-720,resizemode-75/113691097.jpg" },
    { title: "", img: "https://tamil.oneindia.com/img/2022/09/senthilbalaji-stalin44470-1664075704.jpg" },
    { title: "", img: "https://static.tnn.in/thumb/msid-113817325,thumbsize-80026,width-1280,height-720,resizemode-75/113817325.jpg" },
     { title: "", img: "https://img.theweek.in/content/dam/week/week/news/india/images/2024/9/26/senthil-balaji-stalin.jpeg" },
    { title: "", img: "https://i.ytimg.com/vi/O3PPnVD7Bxk/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgUSgwMA8=&rs=AOn4CLAJk8tI5andcr1UKhefNKpb1Ki90Q" },
    { title: "", img: "https://media.assettype.com/freepressjournal/2023-06/b6f9d8e1-a686-4842-ba34-043c04126839/senthil_balaji.jpg?width=1200" },
     { title: "", img: "https://thefederal.com/file/2023/05/Senthil-balaji-696x390.jpg" },
    { title: "", img: "https://gumlet.vikatan.com/vikatan/2022-11/8bbe8f97-9381-422b-b4cf-206b7605e52c/senthil_balaji_with_stalin.jpg?rect=0%2C47%2C720%2C378&w=1200&ar=40:21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100" },
     { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/589414406_1428342521986656_438014141484109262_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ncOEurf0QSEQ7kNvwGEG9YG&_nc_oc=AdlDLAFxE1X3ss9nhB8EZRV28eCYGxLeB7iWrjqFVxNik0SAfqJkQ4UWsU9aSPR4b2Z-3Y3_GE2DySGSRWMsON3G&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=uSG8LedIBVGaAzPBzOUe5g&oh=00_AfltADnMyC0rpO_wrY3t-aTibBolyaS1UTIp8zWiOxqtdg&oe=69541268" },
      { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/590432946_1428326168654958_4576653890923599824_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LKRvgQCHWgoQ7kNvwHtuESF&_nc_oc=Adm2xRK0Gj9Tu4p_lrH2AQW7XDJqv9NXZU8h7VCcg2ad9l777A4PmkcPuQ0yEPbrad-4J8BrcWUbrdQJF6c9N2c0&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=C5wc0MZPwjE1OCD34wbscg&oh=00_AfmaW-puImuaYbFJ5M7ngMiGnjqEs1lMVgXd0ziQleNcrw&oe=695414A9" },
       { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/558303396_1389182612569314_7887420984009096385_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rRHddME5_rcQ7kNvwF5Hh1F&_nc_oc=AdnNVwEPYVk8XjrLTVB0mEKcYmw3MjVg053f9LGnb9uDen4mFBs33Hrjne4fvinqj3DRCvlY0MQS3pKOnwUOowv0&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=Svm43-dWRIAlvPK36432Cg&oh=00_AfkHAALVA9RZcW8j-NuT66d9H1hrsp-mNPP9henKxFGMyw&oe=6953F2D1" },
        { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/549243420_1372717127549196_7770423614537235348_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FoWVBrQtIegQ7kNvwG2wxsv&_nc_oc=AdkgcJobZA2d8D5t8ghMkXDhXpRqgItye83vdRjQHGhdi613dWLWdU1U6q_taRQSbmCFHlBtWoCcYc8OqnLOlhAW&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=VbwSotXvmEB1C8zvMmRA2Q&oh=00_AflO0-v75DH47j2e13BfhFhIGPfCYqy7mc-cY3yPbLMglQ&oe=6953F917" },
        { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/548971748_1370294117791497_4133715138817817679_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cJ4KqM_Xi5MQ7kNvwEcXnZZ&_nc_oc=AdnVIsjjILvYNPpRCjmD5bIS_TGGhEaC2InNKGq48Z-GgZCHq6lM-jRVyppxhF5qIOl-m0DwQWmTT8yEHQvRJrgD&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=1uGO6zNVieuuCMaJm4ZvUg&oh=00_Afm27vHJ_6m3Ms4-UnyxmgF_UriuAMeFBmGg0MfR4OTS6w&oe=69540955" },
       { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/548190762_1370294087791500_9151308671101362801_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Puvx0LbDvcAQ7kNvwFnLMIz&_nc_oc=AdknG8RAuqvlxMVpOT-JqEChlJi_IF7E0619hvgUphvaCKWHjMZ7y2ngfukrz1EWTtcPKhr2SqVsYZc8qoKLLdt7&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=AEG6xX_P2ms5-Lc_LoJ9zA&oh=00_AfmfywqutwjumCuexd52jxmxtD0USPQIRSJF8EL8boqQmA&oe=695410FD" },
        { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/548095045_1370294104458165_8460681011502112502_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cBp9plRTSswQ7kNvwF3Qdwl&_nc_oc=AdktGQoS6mXSEWQlX3ymgWXwr3l-0kS4eQR_dNiT3upQ3w-tMHSY4kJLQmcGD5GspXT2DiM3gtmbc-q4iQL_aFVv&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=gwOpQWN6c0NXrrud-Pd9Yw&oh=00_Afm628_0oa_bQGJS0uPgl0iN2LtnKTOIeHeCU7zlYgxU8g&oe=6953F4EB" },
         { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/545011475_1362781808542728_135131185263025694_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=I5Ssq-omyn8Q7kNvwFrfbnc&_nc_oc=AdkMXHxlm9wSeXCuJ2PL43JT-Hj5U6fgK58U9YcoH2mfd1ywg1FhyH4OQjfY3CtRIiSHVs1KkJpSDHUanJzalmOr&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=NDZqd-uYC6yIfrJrQv22Sg&oh=00_Afnn_bFEaa0G6tVMCQm3IzMGgieBblwxzGINXSagy80Zag&oe=6953EC78" },
       { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/505516427_1293348335486076_203674621384123161_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=oTiecZ9QKf0Q7kNvwFfS_ju&_nc_oc=AdljTNJMnVFzgtSRbVJt60VTq06r91IXjrKdMdeK6PBmypwsgVa1EX9-grvkkHiKxPOpYkAkGL0VE77h7ZTB-43x&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=bu0NdzxgJ1uH2iYC8Rbisg&oh=00_AflJp5DjFXszxx7Exk4_7jQ-dFcqLT3IARmx9rR47bOFNg&oe=6954015D" },
        { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/488701744_1244888250332085_530146604947871548_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kuLOsgxT3xoQ7kNvwEx1BcK&_nc_oc=AdmFlFhzJhZ1SFpzyEJYMxKBAspq_WjFhBrdooFVVx0-udb6iluez0JzBDmRMdzKHOklFp1EuQl1HRXtzznymGQR&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=wBIPwFF8kInsdp7v-ELm4A&oh=00_Aflxs4072MuJFH2dngz694qgehH9rx852p7T88RjY_NBYQ&oe=69541969" }
  ],

  "துணை முதலமைச்சருடன் சந்திப்பு": [
      { img:  "https://media.dailythanthi.com/h-upload/2024/09/27/13473197-untitled-6.jpg" },
     { img:  "https://static.langimg.com/photo/imgsize-93660,msid-90360873/tamil-samayam.jpg" },
    { title: "", img: "https://senthilbalaji.in/wp-content/uploads/2025/07/GvZhM7RbgAATS1b-1024x683.jpg" },
    { title: "", img: "https://senthilbalaji.in/wp-content/uploads/2025/07/Untitled-design1-1024x576.png" },
    { title: "", img: "https://static.langimg.com/photo/imgsize-50924,msid-100620972/tamil-samayam.jpg" },
    { title: "", img: "https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/25/8bd1ae6df4ab32b662ec036d0b70f4b91671958191709200_original.jpeg?impolicy=abp_cdn&imwidth=1200" },
     { title: "", img: "https://static.langimg.com/photo/imgsize-62328,msid-96496998/tamil-samayam.jpg" },
    { title: "", img: "https://imagesvs.oneindia.com/ta/img/2022/12/screenshot63019-1671975826.jpg" },
    { title: "", img: "https://imagesvs.oneindia.com/ta/img/2021/07/senthillll1-1625132719.jpg" },
     { title: "", img: "https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/25/f17edd245f23318ffad1e33efbcdff4a1671959353410188_original.jpg" },
     { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/592970046_1432304394923802_6352976773175231358_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QTnl69Y8o9MQ7kNvwF1T5ev&_nc_oc=AdloaSRjDLAIuSTb1c67jQsmb4MgT82P0SPKOlIxs5jS6v2J10XQfCdMAkp-XpDCHq78L6ZekQDn2yWaIFGDPaZp&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=FEttFML7lOzWEqK81crJWg&oh=00_Afkl_8SJjJeHzJp_gaSDCrvKOfye-kIX-6k7zjHOvsGH-g&oe=69540CC5" },
      { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/590553316_1429133305240911_8166712104490456973_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UHjBl97dT_cQ7kNvwHLH_0B&_nc_oc=AdkYCJHT5k2iOXuBH5vY-ap686gW7SR-hAot5T7IMXd11RnIKNJqyAm9r6BWKlpasb0bf2RImpkoI80Z7VmK8z65&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=SS-J0uyFzMMrb2Atqu9cMg&oh=00_AfkyBQxz-oShbJ8fZwwTm-eGJZ_VIjZ4NossZjY_VyfFXA&oe=695413D0" },
       { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/549248264_1370299267790982_8478449499248232062_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Qp_PuBOA1UMQ7kNvwGGW2Eb&_nc_oc=Adnz0wI-iaFWmpV1zJuIGyq9CDNdiSGWZzOCm8ULFZ5hottk5wKAxNSyC5dXOZnLBqsOf873kvDH-GMEEc4qghKy&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=dJM_Wjqoa8CE2VkustCeLA&oh=00_AfkO-ZVQ8vY1j2hwEopdLD3UowS1UmEBfjR_87j0ZZ_KyA&oe=69541A5D" },
        { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/549700161_1370299304457645_2923519389700852361_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Hnv49P7XIM0Q7kNvwEhEsYu&_nc_oc=AdmyAcLnze3QC_Gtp-3QKA6Y30QTxFZMsCZE9DOgCoJ3ZnvBjGIRuNwOinfgdEvGnv3RJDtyYM_OJG6gMZgaG-Es&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=BSC4pHb_wdksz3onz_ZfVw&oh=00_AfkEz8N-WzRoyttyavGiR6Od8_otkSsscUCcufMFe-rD0Q&oe=6953E929" },
         { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/547672812_1370299254457650_4228437478120582497_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ktiw4Z9ORe0Q7kNvwGIYAab&_nc_oc=Adl1p-oa3yYZsC6qQ9UJn4bKeM7JY7GhRkrqmo8q0dcZhGMP99fUqgrBbAgwHmbM2IFjicqzlzTDzqMexvLzKcwm&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=4j6ncWYcEUZbImV0AQiJng&oh=00_AflYIJHYP-kMuNhw7sSTyZ9BItVRNt6fZzYGPft6wXtbRA&oe=6953EB85" },
          { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/517851033_1314659190021657_6066531250303172795_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=dP0PlLMQBn8Q7kNvwFIrW-A&_nc_oc=AdnSxWxCTOacY8uiNrcQOkmzM0fCPHsq5fAA2APZShR136nJIGGV5BTsZvrcW7EPvtJbua5K0J9jFAI8G6fxP43F&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=CfffC07NwKJmO5B-x_3x7w&oh=00_AfnCV-Ku8d7tR4HuVDoAAnsE-9_92Frk0T0MNavBmCd33w&oe=695401D8" },
        { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/516892846_1314894569998119_733360791443486803_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7zbxmCH7VggQ7kNvwE9uNGu&_nc_oc=AdneFQY368ffOkQALId4XJMgHPm27NqSl0HvyDuILpy3gTgrGfkTMllJyEiuWzanMIDBqKuw0V5907fW2uYPfr4G&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=hRhZY-NvWhR6LX2VNIyK9g&oh=00_Afn0VfeZGVK29vvTm2PdKpCo0q50lgnMnHgAFyv-VtYglQ&oe=69540B0C" },
         { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/518118948_1314873453333564_7880192004781445056_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9i3N0l3tomsQ7kNvwFhUgen&_nc_oc=AdnpHofLEmV_Jm8VJEH7cTcGDlpP2bBou3lJO46sCAKgJvxDt1oPXvH7vLlelLkhlf_e1LNoDHNUBtu2r27TX0lP&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=dLSTScN4XP0lkJQS_CRaiQ&oh=00_Afn0OIwjJaph8OJnJ-9oME94PVdC8zl8EPk_NXwCcNgzXQ&oe=69540AC2" },
                   { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/518248258_1314852236669019_6089687044646595599_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YjgZ62n5lT4Q7kNvwE4YpHV&_nc_oc=Admi78gZZn4AkD84OnuzBcnljhFBkp6Oj3hXovrLwWtceCgRyrlSNyXDhJdKzNZGGj5jWTqtNHrNHZUfwT53CZxG&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=-hdbNbh9cXgq9cs_WAF0nA&oh=00_AfnbgKb9MfGR-Faw_IEBXYflLThTvA0b_6OCuCDiRGNJRA&oe=69540744" },
        { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/516748270_1314852230002353_1148084903388719404_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=p1K9Ncoh3WgQ7kNvwHGxRYx&_nc_oc=AdlER7UFuNCPlJjzYieU5k9dklWXwhmglG2_L7FW461JrCyW6Y_HsfrVkpuKwGfIp5thR4gmP_rGN_aRWy42AOmm&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=TLqTj0XisJVgWSVjVptXUg&oh=00_AfmqZi_frm8rdeVkrLsX6yaMCOsv5wwkXuw5CQjQEuVewg&oe=6953FFF0" },
         { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/517952902_1314583576695885_975188703287403167_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8me0mvKT7RMQ7kNvwENd2iF&_nc_oc=AdnFIt3ch40cxWrFXaITm0WrRx9QQL2HaJnNqk-AZlOSs6OqXd8D8u2Uk5WXMhFSSzQYxxuRrGLC34ZQR_tDmLhs&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=B-TX1AUyLKyYdz9A609mDA&oh=00_AfmyFyUDrNzPbsVUKNtERf3sSxShOrkS0ziP0OQ7z9y3zA&oe=6953F480" },
         
  ],
"மக்கள் நலத்திட்டங்கள்": [
    { img: "https://static-ai.asianetnews.com/images/01fn3fvm91kxfp05w4jmbgpar4/rgsfd.jpg" },
    { img: "https://static.langimg.com/photo/imgsize-46474,msid-95449167/tamil-samayam.jpg" },
    { title: "", img: "https://starsunfolded.com/wp-content/uploads/2023/06/A-photograph-of-V.-Senthil-Balaji-handing-over-the-keys-of-a-vehicle-to-assist-the-differently-abled-people.jpg" },
    { title: "", img: "https://senthilbalaji.in/wp-content/uploads/2025/07/Gv4WO8Za4AIxqKu-2.jpeg" },
    { title: "", img: "https://senthilbalaji.in/wp-content/uploads/2025/10/G28nszvWsAE6d9i-768x432.jpg" },
    { title: "", img: "https://senthilbalaji.in/wp-content/uploads/2025/09/G1l4H8FXoAA7WnU-768x512.jpg" },
     { title: "", img: "https://senthilbalaji.in/wp-content/uploads/2025/07/TNIE_import_2022_4_17_original_farmers-1024x576.jpg" },
    { title: "", img: "https://senthilbalaji.in/wp-content/uploads/2025/10/G3CWSWBbwAAJF0e-768x612.jpg" },
    { title: "", img: "https://senthilbalaji.in/wp-content/uploads/2025/11/s3-1-768x512-1.jpg" },
     { title: "", img: "https://senthilbalaji.in/wp-content/uploads/2025/11/4-768x512-1.jpg" },
     { title: "", img: "https://senthilbalaji.in/wp-content/uploads/2025/11/11-768x512-1.jpg" },
      { title: "", img: "https://senthilbalaji.in/wp-content/uploads/2025/10/G3hFvy0XAAAXrxe-768x512.jpg" },

      { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/597387159_1445284573625784_7218239681419516774_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LrP8BJKSLfsQ7kNvwGn0yU-&_nc_oc=AdlwuyD2Zd9tAv5Y3q7FK1FWrdukbj_Zgf6yg66Jjl54Ds23h6FvCU8XWuCzPtqzaKdQ7xwwQEbJFEkxBYI-xoYA&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=lt8KN73ApEt3cC5ODBAI-A&oh=00_AfnNTCLkB4VQIHNGm6UlQdnOMc8Vc15A8ITdUx2exZ7sMw&oe=695420C5" },
     { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/600279787_1445137930307115_1250339709141878018_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=dlkT0G2I5BgQ7kNvwEYCZ0-&_nc_oc=Adk-KAFqWbU7SG-oCqd2K65cFVzMIa2g7xmnipJ9umg6fgMRCE0sFSEKWePkNEDZtj56-DkV-KVafEiZ-lcYWCGQ&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=fe3gs6JZDKU8nH-uhMEENQ&oh=00_AfndFS7kzhmYe1xMPhG0xsQdyh78wgp0I7XINA5Df-o8fQ&oe=6953F7B4" },
     { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/597286406_1445108853643356_9016222330489812661_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OAZCy0RHXBEQ7kNvwHt-9XX&_nc_oc=AdnyWy6XXXes5zs1zoMnn-a2xn222_QYuaCw0EATwl9-XUiibPClWjHhUFFP15bK471dl_rTJwGk1DBKSYVhYa8U&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=jlzshsxWrMXkrZ6B_CLzrw&oh=00_AfmQcROafxcnEp5u13JH5uJikcLNbT4SEWof19DYEjySxQ&oe=6953EFBE" },
      { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/597389634_1440092130811695_6175029082968827471_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hSgOs-k4LygQ7kNvwHXpojL&_nc_oc=AdkX9e-b_SNo7PhtqKbcpNzenTutDQU01PeBT8Sy61S8iTHqrE0lD4R31mxhMwdwKh9oeSrhpTRBhOcVPG3MSfDu&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=_dZBMMrjXhKgzMVk9VQjUA&oh=00_AfkxACsRL3IkBpVo7eRhchflUCrXNJ4JsW7Wb8qXidi7sQ&oe=69540C38" },
       { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/596372137_1440038367483738_7441228245723773559_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IBswOSd9Zb4Q7kNvwGif0QW&_nc_oc=AdlXi3gJ7RKGPHfEGeYH6PcFOr8CeyUYawfNP4ppJIdfcheY3p0g3dmmWX-5OsYmgzjaqZnLiJCxl5sSuClw9P7_&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=6UHK6CPjPb0C-HrVKs2IpA&oh=00_AflPkWvvpaPMnzhBGoj5ambc2kriEKw0ckBJk4Rubb9S6w&oe=69540012" },
     { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/589496062_1431594481661460_1797311249227528095_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0tigVbOfJBIQ7kNvwFhy2XP&_nc_oc=AdkkJDHP4SLam9qqjfjzMzjQ1pPtkaOTWpbPJrQMllbipxQH32KbG310qpSbGJtV2LC4xGbyfRyiUG7dY2LNhUyZ&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=7cF29ZGZE5arz1HKZwxJ8Q&oh=00_AflZpe6kf3hDGevHEFJaMdsFJBr50zHnzbApa8Amd4tiVA&oe=6953F26B" },
     { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/590346071_1431510451669863_4138078077229791989_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=teLVs0Irdl8Q7kNvwGvT9te&_nc_oc=AdlAJ0PYF6263ZQCfd3QjgmZttByEFPH45m6yMJLq5V0FJOX67tgBFwTIX84qh9wBxlbeBqnhq1TQajG0S1Lghb0&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=9L-UmK_FVxS3ylQBhkaiwg&oh=00_AfnskLcRclInKhKjnrTbMThXOA9CFKcP__sUkI5oPuS3zA&oe=69541EE1" },
      { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/584748991_1425996905554551_3428190659508687195_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sX0h4jr27MMQ7kNvwEFWs7T&_nc_oc=Admg9bs_4sQdyGUllwzYuIOBItHlInDRTnLWvHKjWZ-I0Z0tTUGWcNa9bcRhYGS5Io12-eebJ1bUVs7-OAgk2njS&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=KodbrUSpuM6nPLOY-BFKwA&oh=00_AflPlJqL7CPsUkddTGZn_I3nmWpdjjiNR8ZnrOVbDxLDFQ&oe=69541355" },
     { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/571220795_1401223368031905_4021979333737919853_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=iUKs7ek9T2IQ7kNvwHgMd8h&_nc_oc=Admly4xYFyhe82hZDUpB4U-Wm9AyhxO38_g9H4YvpCIonj2I_O8JwyM7Ty1cX955ahbLjGAPq4D9ef1ZIn5lUOTh&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=su8VguM45pUddOfnxBiF7w&oh=00_Aflcod6Ee7rgpq0AJ2OZkIm2VfU-73zGpGnDZ9n8I6jHeA&oe=6953F3BD" }
],
  "அதிகாரிகளுடன் ஆலோசனைக் கூட்டம்": [
    { img: "https://scontent.fsxv1-1.fna.fbcdn.net/v/t39.30808-6/605801930_1449569353197306_4039186741651005955_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=I8_m7qBnj2sQ7kNvwEPIHI1&_nc_oc=AdlajGBge3VQI7dKAjtozRqGiN2_hJTxpk_FJd7ISzLWxvub4fiM7DCr05zwmxpC_UMdSwiDD0UIU3CisnzZjF5f&_nc_zt=23&_nc_ht=scontent.fsxv1-1.fna&_nc_gid=gCODTPqSFwZRmfhucu49-A&oh=00_AfmDyaWnPtQnSfhSUhlbg1w5SYN10FbzcH63jxqoKiZKJQ&oe=6952E7DD" },
    { img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/580705254_1420488119438763_1690551510298762506_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=a8GwJQV2iWoQ7kNvwHM2nXr&_nc_oc=AdnpobqTfZVoBO8uiMGc4i7yAO6reAM-LEEZtk-EntkXSxBsA93EtZBofkUq8Xs2Ck57unqBWBL87tDFI7vBKaOV&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=wL_30rxLzHV4kP6lEMEEug&oh=00_Afk-IfLOaeaOzXJGwKZooDX-7muJBlkPJ-k1py29T0zMMQ&oe=69540DD0" },
    { title: "", img: "https://senthilbalaji.in/wp-content/uploads/2025/09/G1HaW6Da0AEQuab-768x512.jpg" },
    { title: "", img: "https://senthilbalaji.in/wp-content/uploads/2025/09/G08tN1fb0AA15Hf-768x512.jpg" },
    { title: "", img: "https://senthilbalaji.in/wp-content/uploads/2025/09/G05nAaDXQAAhPOE-768x512.jpg" },
    { title: "", img: "https://senthilbalaji.in/wp-content/uploads/2025/09/G05eM7JaMAEJJ0h-768x512.jpg" },
     { title: "", img: "https://senthilbalaji.in/wp-content/uploads/2025/09/G0z8kY6acAMIYCk-1-1536x1025.jpeg" },
    { title: "", img: "https://senthilbalaji.in/wp-content/uploads/2025/09/G0yjoVMbcAAtW1j-1536x1025.jpeg" },
    { title: "", img: "https://senthilbalaji.in/wp-content/uploads/2025/09/G0tlXWJagAAB5w--768x484.jpeg" },
     { title: "", img: "https://senthilbalaji.in/wp-content/uploads/2025/09/G0ixabFaMAE0qOO.jpg" },
     { title: "", img: "https://senthilbalaji.in/wp-content/uploads/2025/09/G0a1zugXIAAg-c8.jpg" },
      { title: "", img: "https://senthilbalaji.in/wp-content/uploads/2025/09/GzriOiCagAA2Nxn.jpg" },
      
      { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/546617475_1366734748147434_8114792765602264202_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ZSVBHSihzhIQ7kNvwEr7sEQ&_nc_oc=Adm9Iw273ZFrSI50MgmM7LwG4RzXEAONRYLHGMErsIHdIdIiaiZU6tfwasSYF4AK0leOka4Aghx-4suw5oWGnO75&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=iO9usQqeWLPggtbqLRX3yQ&oh=00_AflGTx-V5a_qtj1QbasH-wvNJh_2LULr0Wx6CSHUusOsRw&oe=69541B84" },
     { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/548207933_1366728231481419_4931754826761769228_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=plSvg2QXPy0Q7kNvwGoeUJ2&_nc_oc=Adnq3VuLRIMwLy95YU4en_h2x012LwZij2IUpfp9gr5abCngknbsPwu69_qIaPmSU3n4NegNaKYk5J6JrY8lU7ev&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=kTKDO5WXDYVUB_miUhhe4Q&oh=00_AflOahbKOecZlIJz83nWvlX2sfprnHNm0uf6xC_6Qyocww&oe=69541B19" },
      { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/542115767_1362084208612488_7592826538898443724_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=nAPszIBFx64Q7kNvwFHD46n&_nc_oc=AdmFyQ9XCh1HD9n_w8Q0Ihl7ynpZSjpSj1w0IcbhMq2YMsrAFlXHOz5shr681D22VcT4SLHP88WQtlsVgs_BJnLu&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=VNZi1c1PCQ6nu1msEPeZhw&oh=00_AfmKZWmfN-75tdNoS3W8rbarQJwwbs7F4TagFl9Vp1kkoA&oe=69542883" },
       { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/529479016_1338939544260288_8498235008442197303_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NcU1AuI0oKMQ7kNvwGkXZA9&_nc_oc=AdkQEsYVFn1amktEH_q8ZUoHqe5r5Mdi-NKc6xj0-OOTSGf-wejSyo9kXhMPePZIP47zSFPBscHUogP-5lb1TbHl&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=GwIdE-AO0O6pdVHZp8fukg&oh=00_Afm5VjtMqYfaZLIzc1UsZqEm-Fewm31A8Kt5LSz4SX2f8A&oe=695409B2" },
     { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/528149428_1334216971399212_5964050391152188425_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=B5-iA23LiKEQ7kNvwHSezED&_nc_oc=AdnAvSxSQHWgTGh5XjoDmLuuMM961lm_V0WtsHQzlorih00T1c3LjqKlFyjgZvSNlS8jTQa2DYVsN5wA7RbfPT-0&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=OzNl7GgLakpJbVLsUpq7BA&oh=00_AfkQMmeNEfzZBzKGlGCLKDwZvvt24dN92uk-E5KbFvubsA&oe=6953F8B9" },
      { title: "", img: "https://scontent.fcjb2-1.fna.fbcdn.net/v/t39.30808-6/512954594_1306501830837393_6148570370057873683_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RH9TCLFM68kQ7kNvwEKwqUE&_nc_oc=AdlCINChqSBkbOlnJ-fgm-ghxLai_jP7Dk2IBRNrGXulB9iOSktV7cETVJjbWGQDMWMzGMKZOC0CWHSmWi5weZ2y&_nc_zt=23&_nc_ht=scontent.fcjb2-1.fna&_nc_gid=HrBy83kXM7zMUWH4eKraYw&oh=00_AfmThxEcew03rML_wp_wRzueQP7LgH6_p3Xt6l1QfKFk8A&oe=6954019B" }
  ],
};

const Gallcomp = () => {
  const [active, setActive] = useState("முதல்வருடன் சந்திப்பு");
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-section">

      <h2 className="gallery-title">நிகழ்வுகள்</h2>

      {/* 🔥 HORIZONTAL BUTTON BAR */}
      <div className="gallery-tabs">
        {Object.keys(galleryData).map(item => (
          <button
            key={item}
            className={active === item ? "active" : ""}
            onClick={() => setActive(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* 🔥 CENTER SCROLL BOX */}
      <div className="scroll-wrapper">
        <ScrollBox
          data={galleryData[active]}
          onImageClick={setSelectedImage}
        />
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="preview" />
          <span className="lightbox-close">×</span>
        </div>
      )}

    </div>
  );
};

export default Gallcomp;
//gallcomp.jsx