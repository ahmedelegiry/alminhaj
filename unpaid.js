function fun1(){

    var un=[2453554178,2443485012,2557265739,2437679372,2448065348,2435607060,2467146748,2450123449,2446534907,2450683319,2532466139,2421325115,2449377114,2422801692,2430079026,2414646725,2506780515,2437642347,2455684593,2432820872,2435251059,2477795005,2428310128,2424959571,2434982449,2290411772,2396723393,2483993172,2401825043,2416291579,2397704392,2452373174,2397377389,2390610612,2466679780,2395601384,2404625887,2388173417,2384935520,2417918725,2385058843,2533471443];
    var paid=[2534910662,2444240556,2436394361,2442244410,2435583428,2450903006,2453554178,2449180245,2443570938,2443485012,2441238595,2441615206,2557265739,2437679372,2434715120,2452750777,2449630728,2453623197,2448014957,2492584160,2530607189,2448065348,2522419478,2445952571,2435607060,2450197302,2542062951,2428538306,2428953521,2457482707,2547153391,2439166865,2442552440,2458318413,2448065561,2510243856,2431318829,2467146748,2448548962,2436138495,2495371714,2462570686,2554852943,2526895277,2551759273,2450123449,2440429633,2422697819,2494307347,2446534907,2451605451,2485171728,2450683319,2470736808,2455544094,2450824095,2519054403,2439378908,2526265026,2532466139,2414052882,2418903619,2502889310,2423284807,2421325115,2428176644,2442997363,2459560989,2422825865,2506494125,2439353984,2435092636,2428499517,2402932244,2435400409,2420333334,2430635710,2449377114,2422801692,2430079026,2414646725,2424879449,2506780515,2425499700,2387522382,2435720525,2472843941,2428271213,2412184828,2428491787,2410485979,2411178714,2511448587,2452896463,2430573416,2415371257,2529869907,2437642347,2413687357,2455684593,2417257207,2436547547,2433729163,2445119577,2432820872,2491771453,2490137946,2430060257,2435251059,2528496298,2431997911,2477795005,2428310128,2499240998,2526186057,2426391500,2551241306,4227941410,2465666481,2421733631,2410882852,2537359685,2248134054,2424959571,2448505566,2416204291,2524609894,2554885562,2413428679,2434982449,2290411772,2428988618,2423834825,2424379721,2556630412,2433342355,2433155591,2474535628,2431871140,2411259407,2391938574,2399414503,2398040465,2483903734,2421079514,2387087360,2396723393,2413644010,2416181143,2483993172,2404409464,2422683033,2461067130,2397801438,2542926056,2401825043,2396163517,2416291579,2397704392,2494056365,2452373174,2386383299,2392040255,2397377389,2390610612,2466679780,2417126113,2403104470,2395735042,2288845338,2412618684,2322804713,2486242494,2400969040,2395601384,2399875141,2404625887,2401018862,2395300599,2458770993,2395899574,2446213999,2399872999,2397698487,2408205678,2388173417,2487429231,2412303733,2418535890,2419087396,2408376529,2384935520,2405939329,2521087847,2390901284,2380521902,2551674167,2483658999,2409597313,2393404906,2409599277,2552512580,2385410366,2389005352,2513922787,2417918725,2527790097,2435285362,2385058843,2470008463,2551150325,2525926123,2553403607,2410519058,2412911535,2423351937,2471224879,2533471443,2549843932,2504667656,2439508918,2385320060,2417649726];
    var inputtext=form1.idtext.value;
    var i
    /*var unl=un.length;
    var paidl=paid.length;
    alert (paidl)*/
    for (i = 0; i <= un.length; i++) {

        if (inputtext == un[i]) {
            document.getElementById("link").href="unpaid.html"
            /*alert ("تم حجب الشهادة لعدم سداد جزء من أو كل الرسوم لمزيد من التفاصيل الرجاء الضغط على الرابط التالي \n" + "link");*/
            return true;
        }
    }

    for (i = 0; i <= paid.length; i++) {
        if (inputtext == paid[i]){
            document.getElementById("link").href="1/"+inputtext+".pdf"
            return true;
        }
    }
alert ("رقم الاقامة المدخل غير موجود بقاعدة البيانات")
return false;
}
