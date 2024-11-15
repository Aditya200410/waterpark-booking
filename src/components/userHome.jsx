import { Button, Link, Stack, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { WrapText } from "@mui/icons-material";



export default function UserHome({ userData }) {

  var lin;
  var data = ` 
rayabhijeet00@gmail.com
biswa.jeet.p012@gmail.com
bprava32@gmail.com
mohapatraritika58@gmail.com
chinmayaworks666@gmail.com
sanchitabehera2005@gmail.com
pratyushkumar23vssut@gmail.com
dabulusahoo117@gmail.com
sekharsuman3545@gmail.com
neevsanghai@gmail.com
anurag2005om@gmail.com
laxmipriyasahoo1705@gmail.com
sthitijk3001@gmail.com
shloke1504@gmail.com
ranbeersinghmcl@gmail.com
dabulusahoo00@gmail.com
pujaranipanda91@gmail.com
sthitijk3001@gmail.com
sonakshii1806@gmail.com
sanchitabehera2005@gmail.com
jenasamira20@gmail.com
sekharsuman3545@gmail.com
anurag2005om@gmail.com
pujaranipanda91@gmail.com
alpana.mohanty01@gmail.com
pandamonalisa67@gmail.com
sanchitabehera2005@gmail.com
sonakshii1806@gmail.com
mang
aditikar0205@gmail.com
gurleenkaurnandra737@gmail.com
divyanshi04sahu@gmail.com
ipsitananda2005@gmail.com
twisalenka2005@gmail.com
ranjanpanda12340@gmail.com
pranitrout2@gmail.com
sarabaral351@gmail.com
subratranjanpanda7@gmail.com
aurosish18@gmail.com
washiur9861@gmail.com
Siddharthsarangi2005@gmail.com
sankalppanigrahi2000@gmail.com
chinmayasahoo100@gmail.com
ayushmantripathy.sbp@gmail.com
chinmayasahoo100@gmail.com
rajanpanda12340@gmail.com
mech
bismitaswain2004@gmail.com
debadyasha@gmail.com
hellohrishita@gmail.com
aniketpalei77@gmail.com
ashutoshsahooomm@gmail.com
bibhuprasadkar40@gmail.com
harshkumar24academic@gmail.com
panigrahyayushman@gmail.com
saisunayanajena@gmail.com
bsushrisanskruti@gmail.com
killamchettyabhilasha@gmail.com
smrutisikha1632@gmail.com
pradhankiranmayee20442@gmail.com
soumyabarik566@gmail.com
jhasketan532003@gmail.com
ayushbiswal720@gmail.com
jenaasmitbiswas@gmail.com
pratyushkumar1304@gmail.com
jenajyotiprakash741@gmail.com
ayushmanmishrasbp@gmail.com
rounakpadhan@gmail.com
manshadas2004@gmail.com
chem
patradebadutta25@gmail.com
svmishra2805@gmail.com
allenbal26638@gmail.com
sunandapatra001@gmail.com
sohantripathy1234@gmail.com
gyanar142@gmail.com
shikhanaik03722@gmail.com
jenajyotiprakash741@gmail.com
sambitsundarbhutia@gmail.com
sapankumarmohanta304@gmail.com
etc
senapatiastha2809@gmail.com
ayushsunny50@gmai.com
nayakmahimaprasada66@gmail.com
biswabandhusahoo8@gmail.com
sonalikapatel31@gmail.com
vpranati8@gmail.com
sanjivaneemohanty199@gmail.com
lozlysethy@gmail.com
pujaranisahoo732@gmail.com
jassijasaswinip2@gmail.com
mr.piyush.cv@gmail.com
sambeet.sabat.2002@gmail.com
sahoosuvendu3251@gmail.com
ankitdash.755@gmail.com
ajay.tripathybgr@gmail.com
souravpradhan388@gmail.com
dhirajagrawal461@gmai.com
dishadarshita@gmail.com
anishananda04@gmail.com
hara.prout2004@gmail.com
asmit.patel333@gmail.com
kumarpritish2004@gmail.com
piyushmohanty509@gmail.com
jitenalok03@gmail.com
mohantyanwesa28@gmail.com
nontech
E-mail
nandinisahu.mm@gmail.com
bismitaswain2004@gmail.com
siddhismishra2006@gmail.com
mihikasingh1504@gmail.com
piyushmohanty509@gmail.com
subratsahoo0509@gmail.com
allenbal26638@gmail.com
radaramanswain002@gmail.com
ankitdash.755@gmail.com
ksibasaktipatro@gmail.com
pratyushsahoo88518@gmail.com
routpriya0110@gmail.com
srustisrujanikatripathy2004@gmail.com
debaprasadsaragi86@gmail.com
yasasman.819@gmail.com
imamanpandey04@gmail.com
shikhanaik03722@gmail.com
bibhuprasadkar40@gmail.com
ipsisarangi@gmail.com
EMAIL ID
bismitaswain2004@gmail.com
debadyasha@gmail.com
hellohrishita@gmail.com
aniketpalei77@gmail.com
ashutoshsahooomm@gmail.com
bibhuprasadkar40@gmail.com
harshkumar24academic@gmail.com
panigrahyayushman@gmail.com
saisunayanajena@gmail.com
bsushrisanskruti@gmail.com
killamchettyabhilasha@gmail.com
smrutisikha1632@gmail.com
pradhankiranmayee20442@gmail.com
soumyabarik566@gmail.com
jhasketan532003@gmail.com
ayushbiswal720@gmail.com
jenaasmitbiswas@gmail.com
khuntiabswajit@gmail.com
pratyushkumar1304@gmail.com
jenajyotiprakash741@gmail.com
ayushmanmishrasbp@gmail.com
rounakpadhan@gmail.com
manshadas2004@gmail.com
patradebadutta25@gmail.com
svmishra2805@gmail.com
allenbal26638@gmail.com
sunandapatra001@gmail.com
sohantripathy1234@gmail.com
gyanar142@gmail.com
shikhanaik03722@gmail.com
jenajyotiprakash741@gmail.com
sambitsundarbhutia@gmail.com
sapankumarmohanta304@gmail.com
abhijeet1510god@gmail.com
imsrm85@gmail.com
adityakumar098k@gmail.com
 `;




var bol = 0;

var h = userData.email;
console.log(h);
var arrobj = [];
var lines = data.split("\n");
var headers = lines[0].split(",");

for (var i = 1; i < lines.length; i++) {
var rowdata = lines[i].split(",");
    arrobj[i] = {};

    for (var j = 0; j < rowdata.length; j++) {
     
      if ( rowdata[j] === h ) {
        console.log(h)
        console.log("found");
        bol = 1;
        if (userData.dpone === "cs") {
          lin = "https://chat.whatsapp.com/CmfEBDF4pXy8i8OLBPXZgp";
        }
        if (userData.dpone === "Chemical" || userData.dpone === "propulsion") {
          lin = "https://chat.whatsapp.com/BbKbnkqnwKKLSPEy4yzJK9";
        }
        if (userData.dpone === "electronics") {
          lin = "https://chat.whatsapp.com/Jh9wVZ7RPvI4SQDHaGg5jX";
        }
        if (userData.dpone === "mechanical") {
          lin = "https://chat.whatsapp.com/IaMGUvrElC40sT3sNt4A7m";
        }

        if (userData.dpone === "management") {
          lin = "https://chat.whatsapp.com/DIXtJJ08AcBAvRNEqV3HaV";
        }
        if (userData.dpone === "content-writing") {
          lin = "https://chat.whatsapp.com/C1bIJeIjSBc8t5SIiEfUUE";
        }
        if (userData.dpone === "Graphics Designing") {
          lin = "https://chat.whatsapp.com/FFzEVpTS9HR9iZlQLzIJMZ";
        }
        if (userData.dpone === "Video Editing") {
          lin = "https://chat.whatsapp.com/L64CR3fg7MDLo3hoPW4SXf";
        }
      }
    }
  }



  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (
    
   <div className="topmar">

   <Stack
      sx={{
        width: "100%",
        height: "fit-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#021E30",
      }}
    >
      <Stack
        sx={{
          width: { xs: "100%", sm: "85%", md: "80%" },
          height: { xs: "fitcontent", sm: "85dvh", md: "90dvh" },
          display: "flex",
          flexDirection: "row",
          
          justifyContent: "center",
          alignItems: "center",
          boxShadow: ".0625rem .0625rem .625rem .5rem #00000048",
          borderRadius: ".75rem",
          border: { xs: "2px solid white", sm: "none" },
        }}
      >
        <Stack
          sx={{
            background: `url(https://newdemo.rreda.in/wp-content/uploads/2023/04/cropped-Untitled-design-1.png)`,
            height: "100%",
            display: "flex",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            zIndex: "1",
            width: "100%",
            flex: "1",
            opacity: { xs: "0.1", md: "1" },
            borderRight: { xs: "0px", md: ".25rem solid #021621" },
            position: { xs: "absolute", md: "relative" },
          }}
        ></Stack>
        <Stack
          gap={3}
          sx={{
            color: "whitesmoke",
            flex: "2",
            
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: ".9375rem .625rem",
            zIndex: "2",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bolder",
              borderBottom: ".1875rem solid white",
              paddingBottom: ".125rem",
              fontSize: { xs: "2.8125rem", md: "2.5rem" },
            }}
          >
            Booking Dashboard
          </Typography>
          <Stack
            gap={4}
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              padding: ".625rem .625rem",
              justifyContent: "space-evenly",
              alignItems: "center",
              boxShadow: "1px 1px 8px 4px #00000048",
              borderRadius: ".75rem",
            }}
          >
            <AccountCircleIcon sx={{ fontSize: "4.5rem" }} />
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "auto",
                justifyContent: "center",
                alignItems: "flex-start",
                borderRadius: ".75rem",
                padding: ".625rem .625rem",
                textAlign: "start",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
              >
                Name : {userData.fname}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                Email : {userData.email}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                Phone number : {userData.pnum}
              </Typography>
              
            </Stack>
          </Stack>
          {userData.dpone === "graphics" ||
          userData.dpone === "content-writing" ||
          userData.dpone === "video-editing" ? (
            <Link sx={{ color: "#00CED1" }}>Link will be updated soon.</Link>
          ) : (
            <Stack sx={{ width: "100%" }}>
              <Stack
                gap={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: ".75rem",
                  padding: ".625rem .625rem",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "start",
                  boxShadow: "1px 1px 8px 4px #00000048",
                }}
              >
                <Stack
                  gap={4}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0rem .625rem",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontSize: { xs: "1.5rem", md: "1.25rem" } }}
                  >
                    booking 1
                  </Typography>
                  <Button
                   variant="contained"
                    sx={{
                      
                      background: "#00CED1",
                      color: "#021E30",
                      padding: { xs: ".145rem .395rem", md: "6px 12px" },
                      borderRadius: ".75rem",
                      fontSize: { xs: "0.85rem", md: "0.75rem" },
                      textDecoration: "none"
                    }}
                  >
                   Date
                  </Button>
                </Stack>
                
              </Stack>
            </Stack>
          )}
          <Button
            variant="contained"
            sx={{
              background: "#00CED1",
              color: "#021E30",
              padding: ".25rem .5rem",
              borderRadius: ".75rem",
              fontSize: { xs: "1.125rem", md: "1rem" },
            }}
            onClick={logOut}
          >
            Log out
          </Button>
        </Stack>
      </Stack>
    </Stack>
    </div>
  );
}
