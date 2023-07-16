import React from 'react'
import bg from './bg.jpeg'

import { Link } from 'react-router-dom';

const locationData = [
  {
    name : "Tulsi Complex",
    lat : 29.128921,
    long : 75.770936
  },
  {
    name : "Main Guest House",
    lat : 29.129204,
    long : 75.771911
  },
  {
    name : "Nelwa Guest House",
    lat : 29.129039,
    long : 75.772318
  },
  {
    name : "Libraray",
    lat : 29.128568,
    long : 75.770914
  },
  {
    name : "Cafateria",
    lat : 29.128216,
    long : 75.770902
  },
  {
    name : "New cctv",
    lat : 29.128165,
    long : 75.771097
  },
  {
    name : "Roll Shop",
    lat : 29.127429,
    long : 75.770942
  },
  {
    name : "Time Office",
    lat : 29.128865,
    long : 75.772401
  },
  {
    name : "Admin D.S",
    lat : 29.128523,
    long : 75.772123
  },
  {
    name : "Civil Office",
    lat : 29.128243,
    long : 75.772241
  },
  {
    name : "Main Store",
    lat : 29.128257,
    long : 75.772880
  },
  {
    name : "Strip MILL",
    lat : 29.128013,
    long : 75.772719
  },
  {
    name : "Strip Mill Mech.",
    lat : 29.127774,
    long : 75.773019
  },
  {
    name : "STK PULPIT",
    lat : 29.125035,
    long : 75.772445
  },
  {
    name : "STK D.S",
    lat : 29.125035,
    long : 75.771445
  },
  {
    name : "ELE WORKSHOP",
    lat : 29.126952,
    long : 75.771500
  },
  {
    name : "NEW PLATE SECTION",
    lat : 29.129027,
    long : 75.772188
  },
  {
    name : "MAIN POWER PLANT",
    lat : 29.128892,
    long : 75.773065
  },
  {
    name : "WARSHILA PLANT",
    lat : 29.128593,
    long : 75.773513
  },
  {
    name : "SMS-1 G-FLOOR",
    lat : 29.128217,
    long : 75.773929
  },
  {
    name : "SMS-1 D.S",
    lat : 29.128123,
    long : 75.773701
  },
  {
    name : "SMS-1 AOD",
    lat : 29.127961,
    long : 75.773677
  },
  {
    name : "SMS-1 VOD",
    lat : 29.127911,
    long : 75.774133
  },
  {
    name : "132 KV",
    lat : 29.128201,
    long : 75.774154
  },
  {
    name : "CCS-1",
    lat : 29.127904,
    long : 75.774475
  },
  {
    name : "SMS-1 ELE",
    lat : 29.127907,
    long : 75.773927
  },
  {
    name : "SMS-1 CHARGING",
    lat : 29.127718,
    long : 75.773686
  },
  {
    name : "STK ECR",
    lat : 29.127544,
    long : 75.773609
  },
  {
    name : "BELL ANNEALING",
    lat : 29.127468,
    long : 75.774575
  },
  {
    name : "DANIELY GRINDER",
    lat : 29.126945,
    long : 75.773816
  },
  {
    name : "BOGIE HEARTH",
    lat : 29.126908,
    long : 75.773853
  },
  {
    name : "COIL DISPATCH",
    lat : 29.126697,
    long : 75.774353
  },
  {
    name : "SMS-2 AOD",
    lat : 29.125387,
    long : 75.774070
  },
  {
    name : "SMS-2 CHARGING",
    lat : 29.125239,
    long : 75.774438
  },
  {
    name : "SMS-2 D.S",
    lat : 29.125551,
    long : 75.773838
  },
  {
    name : "BLOOM CASTER",
    lat : 29.125081,
    long : 75.774591
  },
  {
    name : "WEIGH BRIDGE",
    lat : 29.123505,
    long : 75.775557
  },
  {
    name : "CHINESE GRINGDER",
    lat : 29.123505,
    long : 75.775557
  },
  {
    name : "SHOT BLASTING",
    lat : 29.123864,
    long : 75.775737
  },
  {
    name : "SLAB CASTER",
    lat : 29.123670,
    long : 75.776114
  },
  {
    name : "OLD SCRAP YARD",
    lat : 29.123542,
    long : 75.776465
  },
  {
    name : "NEW SCRAP YARD",
    lat : 29.122385,
    long : 75.774536
  },
  {
    name : "CU/IN",
    lat : 29.122539,
    long : 75.775528
  },
  {
    name : "OLD PLATE SECTION",
    lat : 29.127053,
    long : 75.772528
  },
  {
    name : "220KV D.S",
    lat : 29.126644,
    long : 75.776639
  },
  {
    name : "CRAIN MAINT.",
    lat : 29.125591,
    long : 75.776653
  },
  {
    name : "BALL MILL KANTA",
    lat : 29.125453,
    long : 75.777258
  },
  {
    name : "MECH. SHOP",
    lat : 29.124280,
    long : 75.775907
  },
  {
    name : "CTL",
    lat : 29.124192,
    long : 75.776501
  },
  {
    name : "FABRICATION",
    lat : 29.124056,
    long : 75.776973
  },
  {
    name : "RO PLANT",
    lat : 29.123732,
    long : 75.777600
  },
  {
    name : "BALL MILL",
    lat : 29.124696,
    long : 75.777593
  },
  {
    name : "SAF",
    lat : 29.124860,
    long : 75.778156
  },
  {
    name : "GET HOSTEL",
    lat : 29.126473,
    long : 75.777843
  },
  {
    name : "GATE-2",
    lat : 29.127145,
    long : 75.777822
  },
  {
    name : "DISPATCH",
    lat : 29.124947,
    long : 75.779101
  },
  {
    name : "G2",
    lat : 29.125818,
    long : 75.773226
  }
];




const Cards = () => {
  return (
    <div className='relative'>
    <img src={bg} className='object-cover z-[-1] opacity-25 absolute w-[100%] h-[100%]' alt="" />
    <h1 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center py-[50px]'>OUR TOWERS</h1>
    <div className="container mx-auto grid  grid-cols-4 gap-4">
      {locationData.map((location, index) => (
        <Link to={`/map/${location.lat}/${location.long}`}key={index} className="card border-[1px] border-black cursor-pointer hover:scale-90 duration-500 rounded shadow-lg p-4">
          <div className="text-lg font-semibold">{location.name}</div>        
        </Link>
      ))}
    </div>
    </div>
  )
}

export default Cards