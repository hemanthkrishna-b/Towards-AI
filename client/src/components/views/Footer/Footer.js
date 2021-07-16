import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <footer style={{   position:"absolute",bottom:"0"}}> <p>Happy Coding  <Icon type="smile" /></p></footer>
        </div>
    )
}

export default Footer
