import React from "react";

class TrustArcElements extends React.Component {
  
  constructor(props) {
    super(props);
  }

  openConsentManager = e => {
    window.truste && window.truste.eu && window.truste.eu.clickListener()
  }

  render() {
    return (
      <>
        <div id="consent_blackbar"></div>
        <button
          id="cookie-prefs-icon"
          title="linode.com Cookie Preferences"
          onClick={this.openConsentManager}
        >
          <svg viewBox="0 0 82.46 81.4299" xmlns="http://www.w3.org/2000/svg">
            <path d="m79.9979 37.4147c.0653.9211.1103 1.8477.1103 2.7853 0 21.4719-17.4064 38.8784-38.8784 38.8784s-38.8783-17.4064-38.8783-38.8784c0-16.9064 10.7944-31.2857 25.8648-36.639.8674 5.3335 4.8539 9.6192 10.03 10.9179.1671 10.9668 9.1038 19.8069 20.1104 19.8069 2.5215 0 4.9325-.4681 7.1566-1.3151 2.4761 3.0707 6.2669 5.0369 10.5187 5.0369 1.3803 0 2.7117-.2081 3.9659-.5928zm-29.6359-37.1604c-1.8262.7011-2.7384 2.7498-2.0373 4.5761s2.7498 2.7384 4.5761 2.0373 2.7384-2.7498 2.0373-4.5761-2.7498-2.7384-4.5761-2.0373zm24.6434-.1362c-.9131.3505-1.3692 1.3749-1.0187 2.288s1.3749 1.3692 2.288 1.0187 1.3692-1.3749 1.0187-2.288-1.3749-1.3692-2.288-1.0187zm-7.6898 11.5859c-2.5995 0-4.7068 2.1073-4.7068 4.7068s2.1073 4.7068 4.7068 4.7068 4.7068-2.1073 4.7068-4.7068-2.1073-4.7068-4.7068-4.7068z" fill="currentColor"></path>
            <path d="m41.2295 81.4299c-22.7344 0-41.2295-18.4951-41.2295-41.2295 0-17.4131 11.0225-33.0273 27.4287-38.8554.6562-.2334 1.3828-.1641 1.9844.1914.5996.3555 1.0117.958 1.124 1.6465.7148 4.3936 3.9658 7.9316 8.2812 9.0146 1.0332.2598 1.7627 1.1807 1.7793 2.2451.1465 9.6445 8.1133 17.4912 17.7588 17.4912 2.1709 0 4.2969-.3906 6.3203-1.1602.958-.3652 2.0303-.0693 2.668.7217 2.1318 2.6436 5.2979 4.1602 8.6875 4.1602 1.1152 0 2.2178-.165 3.2764-.4893.6836-.2109 1.4277-.0967 2.0195.3086.5908.4053.9648 1.0586 1.0156 1.7734.0791 1.1172.1162 2.0557.1162 2.9521 0 22.7344-18.4961 41.2295-41.2305 41.2295zm-14.6182-74.707c-13.2041 5.7685-21.9082 18.9131-21.9082 33.4775 0 20.1406 16.3857 36.5264 36.5264 36.5264 20.1191 0 36.4912-16.3516 36.5273-36.4619-.5713.0625-1.1465.0938-1.7246.0938-4.2568 0-8.2656-1.6816-11.2314-4.6641-2.0869.626-4.248.9424-6.4443.9424-11.6201 0-21.3145-9.0049-22.3691-20.4014-4.3916-1.6377-7.8145-5.1318-9.376-9.5127z" fill="#000"></path>
            <path d="m27.0191 19.4249c0 1.1123-.9017 2.014-2.014 2.014s-2.014-.9017-2.014-2.014.9017-2.014 2.014-2.014 2.014.9017 2.014 2.014zm6.368 10.6535c-.6209 0-1.1243.5034-1.1243 1.1243s.5034 1.1243 1.1243 1.1243 1.1243-.5034 1.1243-1.1243-.5034-1.1243-1.1243-1.1243zm-11.396 22.3004c-1.7421 0-3.1543 1.4122-3.1543 3.1543s1.4122 3.1543 3.1543 3.1543 3.1543-1.4122 3.1543-3.1543-1.4122-3.1543-3.1543-3.1543zm-4.8185-22.3004c-3.2134 0-5.8185 2.605-5.8185 5.8185s2.605 5.8185 5.8185 5.8185 5.8185-2.605 5.8185-5.8185-2.605-5.8185-5.8185-5.8185zm39.7048 26.4984c-2.192 0-3.969 1.777-3.969 3.969s1.777 3.969 3.969 3.969 3.969-1.777 3.969-3.969-1.777-3.969-3.969-3.969zm-18.3142-14.6104c-2.8587 0-5.1761 2.3174-5.1761 5.1761s2.3174 5.1761 5.1761 5.1761 5.1761-2.3174 5.1761-5.1761-2.3174-5.1761-5.1761-5.1761zm28.7524 3.3403c-1.4434 0-2.6136 1.1701-2.6136 2.6136s1.1701 2.6136 2.6136 2.6136 2.6136-1.1701 2.6136-2.6136-1.1701-2.6136-2.6136-2.6136zm-30.1656 21.7944c-.9269 0-1.6783.7514-1.6783 1.6783s.7514 1.6783 1.6783 1.6783 1.6783-.7514 1.6783-1.6783-.7514-1.6783-1.6783-1.6783z" fill="#fff"></path>
          </svg>
        </button>
      </>
    );
  }
}

export default props => (
  <TrustArcElements />
);
