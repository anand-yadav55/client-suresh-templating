import React, { Component } from 'react'
import { Drawer } from 'antd'
import { Map, TileLayer, Marker, GeoJSON, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import FullscreenOutlined from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MapView extends Component {
  static propTypes = {}
  constructor(props) {
    super(props)
    this.state = {
      lat: 26.4499,
      lng: 74.6399,
      zoom: 11,
      cameras: [
        {
          lat: 26.58899,
          lng: 74.88779,
          id: 1,
          chainage: '120KM',
          connection: true,
        },

        {
          lat: 26.60173,
          lng: 74.85784,
          id: 2,
          chainage: '155KM',
          connection: true,
        },
        {
          lat: 26.52035,
          lng: 74.71355,
          id: 3,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.40725,
          lng: 74.65974,
          id: 4,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.36373,
          lng: 74.60893,
          id: 5,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.3365,
          lng: 74.57288,
          id: 6,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.20273,
          lng: 74.44508,
          id: 7,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.1334,
          lng: 74.3474,
          id: 8,
          chainage: '220KM',
          connection: true,
        },
      ],
      phones: [
        {
          lat: 26.58546,
          lng: 74.90067,
          id: 24,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.58576,
          lng: 74.88075,
          id: 25,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.59651,
          lng: 74.86736,
          id: 26,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.59497,
          lng: 74.84848,
          id: 27,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.58546,
          lng: 74.832,
          id: 28,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.57379,
          lng: 74.81621,
          id: 29,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.55844,
          lng: 74.80247,
          id: 30,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.54584,
          lng: 74.77432,
          id: 31,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.53724,
          lng: 74.75956,
          id: 32,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.52926,
          lng: 74.74136,
          id: 33,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.52066,
          lng: 74.71836,
          id: 34,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.5099,
          lng: 74.70634,
          id: 35,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.49362,
          lng: 74.71115,
          id: 36,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.47733,
          lng: 74.7163,
          id: 37,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.46043,
          lng: 74.71115,
          id: 38,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.44076,
          lng: 74.7036,
          id: 39,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.42692,
          lng: 74.68712,
          id: 40,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.41401,
          lng: 74.67098,
          id: 41,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.39925,
          lng: 74.65313,
          id: 42,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.38664,
          lng: 74.6394,
          id: 43,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.37372,
          lng: 74.62669,
          id: 44,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.3608,
          lng: 74.61365,
          id: 45,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.3568,
          lng: 74.59373,
          id: 46,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.3445,
          lng: 74.5879,
          id: 47,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.33711,
          lng: 74.57932,
          id: 48,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.32727,
          lng: 74.56455,
          id: 49,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.31588,
          lng: 74.55151,
          id: 50,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.30234,
          lng: 74.54018,
          id: 51,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.28849,
          lng: 74.52953,
          id: 52,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.27895,
          lng: 74.51305,
          id: 53,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.27341,
          lng: 74.49863,
          id: 54,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.25678,
          lng: 74.49451,
          id: 55,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.242,
          lng: 74.48353,
          id: 56,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.22753,
          lng: 74.47186,
          id: 57,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.21398,
          lng: 74.45778,
          id: 58,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.19765,
          lng: 74.44508,
          id: 59,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.18563,
          lng: 74.42688,
          id: 60,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.17824,
          lng: 74.40903,
          id: 61,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.16746,
          lng: 74.3898,
          id: 62,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.15636,
          lng: 74.37229,
          id: 63,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.14465,
          lng: 74.36028,
          id: 64,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.12493,
          lng: 74.34586,
          id: 65,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.1055,
          lng: 74.34586,
          id: 66,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.08423,
          lng: 74.34105,
          id: 67,
          chainage: '220KM',
          connection: true,
        },
      ],
      met: [
        {
          lat: 26.55256,
          lng: 74.78454,
          id: 10,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.16391,
          lng: 74.38259,
          id: 11,
          chainage: '220KM',
          connection: true,
        },
      ],
      vms: [
        {
          lat: 26.55632,
          lng: 74.79273,
          id: 12,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.55679,
          lng: 74.79239,
          id: 13,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.52434,
          lng: 74.72119,
          id: 14,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.36319,
          lng: 74.60936,
          id: 15,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.36103,
          lng: 74.59511,
          id: 16,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.19657,
          lng: 74.43958,
          id: 17,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.16021,
          lng: 74.37469,
          id: 18,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.15605,
          lng: 74.36646,
          id: 10,
          chainage: '220KM',
          connection: true,
        },
      ],
      atcc: [
        {
          lat: 26.55594,
          lng: 74.79179,
          id: 20,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.55632,
          lng: 74.79157,
          id: 21,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.17339,
          lng: 74.39315,
          id: 22,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.17385,
          lng: 74.39272,
          id: 23,
          chainage: '220KM',
          connection: true,
        },
      ],
      ecbslave: [
        {
          lat: 26.59313,
          lng: 74.90101,
          id: 68,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.59313,
          lng: 74.88075,
          id: 69,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.60388,
          lng: 74.86771,
          id: 70,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.60142,
          lng: 74.84642,
          id: 71,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.5916,
          lng: 74.82925,
          id: 72,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.5784,
          lng: 74.81346,
          id: 73,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.56335,
          lng: 74.79836,
          id: 74,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.55137,
          lng: 74.77123,
          id: 75,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.54339,
          lng: 74.75613,
          id: 76,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.53417,
          lng: 74.73827,
          id: 77,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.52526,
          lng: 74.71561,
          id: 78,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.51052,
          lng: 74.69948,
          id: 79,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.49301,
          lng: 74.70531,
          id: 80,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.47703,
          lng: 74.71046,
          id: 81,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.46227,
          lng: 74.70531,
          id: 82,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.44598,
          lng: 74.69879,
          id: 83,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.43277,
          lng: 74.683,
          id: 84,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.41924,
          lng: 74.66686,
          id: 85,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.40571,
          lng: 74.64901,
          id: 86,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.39156,
          lng: 74.63459,
          id: 87,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.37864,
          lng: 74.62292,
          id: 88,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.36788,
          lng: 74.61262,
          id: 89,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.35957,
          lng: 74.58858,
          id: 90,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.34819,
          lng: 74.58309,
          id: 91,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.34111,
          lng: 74.57588,
          id: 92,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.33188,
          lng: 74.56009,
          id: 93,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.3205,
          lng: 74.54601,
          id: 94,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.30696,
          lng: 74.53503,
          id: 95,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.29403,
          lng: 74.5237,
          id: 96,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.28634,
          lng: 74.51237,
          id: 97,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.27802,
          lng: 74.49314,
          id: 98,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.25955,
          lng: 74.49039,
          id: 99,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.24662,
          lng: 74.47906,
          id: 100,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.23215,
          lng: 74.46739,
          id: 101,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.21736,
          lng: 74.45366,
          id: 102,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.20319,
          lng: 74.4413,
          id: 103,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.19149,
          lng: 74.42448,
          id: 104,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.18317,
          lng: 74.40731,
          id: 105,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.17085,
          lng: 74.38602,
          id: 106,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.1616,
          lng: 74.36954,
          id: 107,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.14804,
          lng: 74.35616,
          id: 108,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.12616,
          lng: 74.34071,
          id: 109,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.1055,
          lng: 74.34002,
          id: 110,
          chainage: '220KM',
          connection: true,
        },
        {
          lat: 26.08731,
          lng: 74.33556,
          id: 111,
          chainage: '220KM',
          connection: true,
        },
      ],
      routeGeoJson: {
        coordinates: [
          [74.311883, 26.099694],
          [74.313592, 26.105011],
          [74.324288, 26.105257],
          [74.363704, 26.154093],
          [74.390543, 26.172531],
          [74.437584, 26.194119],
          [74.485556, 26.249306],
          [74.498971, 26.279132],
          [74.519989, 26.284955],
          [74.553217, 26.322603],
          [74.584275, 26.345487],
          [74.592343, 26.359971],
          [74.615151, 26.36587],
          [74.700772, 26.443723],
          [74.713978, 26.475931],
          [74.703262, 26.507027],
          [74.70553, 26.514253],
          [74.798358, 26.558899],
          [74.80517, 26.569552],
          [74.853621, 26.600538],
          [74.86714, 26.59776],
          [74.860448, 26.58848],
        ],
        type: 'LineString',
      },
      selectedDevice: null,
    }
  }

  state = {
    collapsed: true,
  }

  polystyle = (feature) => {
    return {
      fillColor: 'blue',
      weight: 5,
      opacity: 1,
      color: '#536878', //Outline color
      fillOpacity: 0.7,
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    })
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  showPopup = () => {
    this.showDrawer()
  }

  componentDidMount() {}

  onCameraClicked = (camera, event) => {
    this.setState({ selectedDevice: { type: 'camera', camera } }, () => {
      this.showPopup()
    })
    console.log(event, camera)
  }

  onPhoneClicked = (phone, event) => {
    this.setState({ selectedDevice: { type: 'phone', phone } }, () => {
      this.showPopup()
    })
    console.log(event, phone)
  }

  onMetClicked = (met, event) => {
    this.setState({ selectedDevice: { type: 'met', met } }, () => {
      this.showPopup()
    })
    console.log(event, met)
  }

  onVMSClicked = (met, event) => {
    this.setState({ selectedDevice: { type: 'vms', met } }, () => {
      this.showPopup()
    })
    console.log(event, met)
  }

  onATCCClicked = (atcc, event) => {
    this.setState({ selectedDevice: { type: 'atcc', atcc } }, () => {
      this.showPopup()
    })
    console.log(event, atcc)
  }

  onECBSlaveClicked = (phone, event) => {
    this.setState({ selectedDevice: { type: 'ecbslave', phone } }, () => {
      this.showPopup()
    })
    console.log(event, phone)
  }

  getPopupContent = () => {
    if (this.state.selectedDevice == null) {
      return <></>
    }
    // switch (this.state.selectedDevice.type) {
    //   case 'camera':
    //     return <Camera camera={this.state.selectedDevice.camera} />
    //   case 'phone':
    //     return <ECB type={"Master"} camera={this.state.selectedDevice.phone} />
    //   case 'met':
    //     return <Met camera={this.state.selectedDevice.met} />
    //   case 'vms':
    //     return <Vms camera={this.state.selectedDevice.met} />
    //   case 'atcc':
    //     return <ATCC camera={this.state.selectedDevice.atcc} />
    //   case 'ecbslave':
    //     return <ECB type={"Slave"} camera={this.state.selectedDevice.phone} />
    //   default:
    //     return ''
    // }
  }

  render() {
    const cameraIcon = new L.Icon({
      iconUrl:
        'https://gw.alipayobjects.com/zos/basement_prod/30580bc9-506f-4438-8c1a-744e082054ec.svg',
      iconRetinaUrl: '/images/camera.svg',
      iconSize: [30, 30],
    })
    const phoneIcon = new L.Icon({
      iconUrl:
        'https://gw.alipayobjects.com/zos/basement_prod/7aa1f460-9f9f-499f-afdf-13424aa26bbf.svg',
      iconRetinaUrl: '/images/ecb.svg',
      iconSize: [30, 30],
    })
    const metIcon = new L.Icon({
      iconUrl:
        'https://gw.alipayobjects.com/zos/basement_prod/604b5e7f-309e-40db-b95b-4fac746c5153.svg',
      iconRetinaUrl: '/images/met.svg',
      iconSize: [30, 30],
    })
    const vmsIcon = new L.Icon({
      iconUrl: '/images/vms.svg',
      iconRetinaUrl: '/images/vms.svg',
      iconSize: [30, 30],
    })
    const atccIcon = new L.Icon({
      iconUrl: '/images/atcc-3.svg',
      iconRetinaUrl: '/images/atcc-3.svg',
      iconSize: [30, 30],
    })
    const ecbSlaveIcon = new L.Icon({
      iconUrl: '/images/ecb.svg',
      iconRetinaUrl: '/images/ecb.svg',
      iconSize: [30, 30],
    })
    // const vmsIcon = <abbr title="VMS Icon is here">{vmsIconX}</abbr>;
    const position = [this.state.lat, this.state.lng]

    return (
      <React.Fragment>
        <Drawer
          title={this.selectedDevice && this.selectedDevice.type}
          placement="right"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
          width={520}
        >
          {this.getPopupContent()}
        </Drawer>
        <Map
          center={position}
          style={{ width: '100%', height: '100%', position: 'relaive' }}
          zoom={this.state.zoom}
        >
          <FullscreenOutlined className="mapExpanderCSS" />
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />
          <GeoJSON data={this.state.routeGeoJson} style={this.polystyle} />
          {this.state.cameras.map((camera) => {
            return (
              <Marker
                onclick={this.onCameraClicked.bind(this, camera)}
                style={{ color: 'red' }}
                icon={cameraIcon}
                position={[camera.lat, camera.lng]}
                key={`1${camera.id}`}
              >
                <Tooltip>
                  <div style={{ lineHeight: '100%' }}>
                    <div style={{ lineHeight: '110%' }}>
                      Device Type : Camera
                    </div>
                    <div style={{ lineHeight: '110%' }}>
                      Location : {camera.lat}, {camera.lng}
                    </div>
                    <div style={{ lineHeight: '110%' }}>
                      Chainage : {camera.chainage}
                    </div>
                    <div style={{ lineHeight: '110%' }}>
                      Connection :{' '}
                      <FontAwesomeIcon
                        icon={['fas', 'circle']}
                        color={camera.connection ? 'green' : 'red'}
                      />
                    </div>
                  </div>
                </Tooltip>
              </Marker>
            )
          })}
          {this.state.phones.map((phone) => {
            return (
              <Marker
                onclick={this.onPhoneClicked.bind(this, phone)}
                icon={phoneIcon}
                position={[phone.lat, phone.lng]}
                key={`2${phone.id}`}
              >
                <Tooltip>
                  <div style={{ lineHeight: '100%' }}>
                    <div style={{ lineHeight: '110%' }}>Device Type : ECB</div>
                    <div style={{ lineHeight: '110%' }}>
                      Location : {phone.lat}, {phone.lng}
                    </div>
                    <div style={{ lineHeight: '110%' }}>
                      Chainage : {phone.chainage}
                    </div>
                    <div style={{ lineHeight: '110%' }}>
                      Connection :{' '}
                      <FontAwesomeIcon
                        icon={['fas', 'circle']}
                        color={phone.connection ? 'green' : 'red'}
                      />
                    </div>
                  </div>
                </Tooltip>
              </Marker>
            )
          })}
          {this.state.met.map((met) => {
            return (
              <Marker
                onclick={this.onMetClicked.bind(this, met)}
                icon={metIcon}
                position={[met.lat, met.lng]}
                key={`3${met.id}`}
              >
                <Tooltip>
                  <div style={{ lineHeight: '100%' }}>
                    <div style={{ lineHeight: '110%' }}>Device Type : WMS</div>
                    <div style={{ lineHeight: '110%' }}>
                      Location : {met.lat}, {met.lng}
                    </div>
                    <div style={{ lineHeight: '110%' }}>
                      Chainage : {met.chainage}
                    </div>
                    <div style={{ lineHeight: '110%' }}>
                      Connection :{' '}
                      <FontAwesomeIcon
                        icon={['fas', 'circle']}
                        color={met.connection ? 'green' : 'red'}
                      />
                    </div>
                  </div>
                </Tooltip>
              </Marker>
            )
          })}
          {this.state.vms.map((vms) => {
            return (
              <Marker
                onclick={this.onVMSClicked.bind(this, vms)}
                icon={vmsIcon}
                position={[vms.lat, vms.lng]}
                key={`4${vms.id}`}
              >
                <Tooltip>
                  <div style={{ lineHeight: '100%' }}>
                    <div style={{ lineHeight: '110%' }}>Device Type : VMS</div>
                    <div style={{ lineHeight: '110%' }}>
                      Location : {vms.lat}, {vms.lng}
                    </div>
                    <div style={{ lineHeight: '110%' }}>
                      Chainage : {vms.chainage}
                    </div>
                    <div style={{ lineHeight: '110%' }}>
                      Connection :{' '}
                      <FontAwesomeIcon
                        icon={['fas', 'circle']}
                        color={vms.connection ? 'green' : 'red'}
                      />
                    </div>
                  </div>
                </Tooltip>
              </Marker>
            )
          })}
          {this.state.atcc.map((atcc) => {
            return (
              <Marker
                onclick={this.onATCCClicked.bind(this, atcc)}
                style={{ color: 'red' }}
                icon={atccIcon}
                position={[atcc.lat, atcc.lng]}
                key={`1${atcc.id}`}
              >
                <Tooltip>
                  <div style={{ lineHeight: '100%' }}>
                    <div style={{ lineHeight: '110%' }}>Device Type : ATCC</div>
                    <div style={{ lineHeight: '110%' }}>
                      Location : {atcc.lat}, {atcc.lng}
                    </div>
                    <div style={{ lineHeight: '110%' }}>
                      Chainage : {atcc.chainage}
                    </div>
                    <div style={{ lineHeight: '110%' }}>
                      Connection :{' '}
                      <FontAwesomeIcon
                        icon={['fas', 'circle']}
                        color={atcc.connection ? 'green' : 'red'}
                      />
                    </div>
                  </div>
                </Tooltip>
              </Marker>
            )
          })}

          {this.state.ecbslave.map((ecbslave) => {
            return (
              <Marker
                onclick={this.onECBSlaveClicked.bind(this, ecbslave)}
                style={{ color: 'red' }}
                icon={ecbSlaveIcon}
                position={[ecbslave.lat, ecbslave.lng]}
                key={`1${ecbslave.id}`}
              >
                <Tooltip>
                  <div style={{ lineHeight: '100%' }}>
                    <div style={{ lineHeight: '110%' }}>
                      Device Type : ECB Slave
                    </div>
                    <div style={{ lineHeight: '110%' }}>
                      Location : {ecbslave.lat}, {ecbslave.lng}
                    </div>
                    <div style={{ lineHeight: '110%' }}>
                      Chainage : {ecbslave.chainage}
                    </div>
                    <div style={{ lineHeight: '110%' }}>
                      Connection :{' '}
                      <FontAwesomeIcon
                        icon={['fas', 'circle']}
                        color={ecbslave.connection ? 'green' : 'red'}
                      />
                    </div>
                  </div>
                </Tooltip>
              </Marker>
            )
          })}
        </Map>
      </React.Fragment>
    )
  }
}

export default MapView
