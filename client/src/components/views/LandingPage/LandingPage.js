import { FaCode } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Icon, Avatar, Col, Typography, Row } from 'antd';
import { useSelector } from "react-redux";
const { Title } = Typography
const { Meta } = Card;

function LandingPage() {
    
    const [blog, setblog] = useState([])
    const user = useSelector(state => state.user);
    const [call ,setcall] = useState(0)

    var ar = Object.keys(user)
    var ar_l = ar.length;
    console.log(ar)

    if(ar_l >= 1){
        var usr = user.userData._id;
        var a =user.userData.isAuth;
        if(a !== false)
        {
        if(call <= 4){
            var ur = {id:usr}
            axios.post('/api/blog/blogbyid',ur)
            .then(response => {
                if (response.data.success) {
                    setblog(response.data.pos)
                    console.log("Success")
                } else {
                    alert('Couldnt get blog`s lists')
                }
            })
            setcall(call+1);
        }
        const renderCards = blog.map((blog, index) => {
            var a =new Date(blog.createdAt);
            var ret = a.toDateString();
            return <Col key={index} lg={8} md={12} xs={24}>
                <Card
                    hoverable
                    style={{ width: 370, marginTop: 16 }}
                    actions={[
                        <a href={`/blog/post/delete/${blog._id}`}><Icon type="delete" key="setting" /></a>,
                        <a href={`/blog/post/edit/${blog._id}`}><Icon type="edit" key="edit" /></a>,
                        <a href={`/blog/post/${blog._id}`}> <Icon type="more" key="ellipsis" /></a>,
                    ]}
                >
                    <Meta
                        avatar={
                            <Avatar src={blog.writer.image} />
                        }
                        title={blog.writer.name}
                        //extra ={blog.createdAt}
                        
                        description={ret}
                    />
                    <div style={{ height: 150, overflowY: 'scroll', marginTop: 10 }}>
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </div>
                </Card>
            </Col>
        })
    
        return (
            <div style={{ width: '85%', margin: '3rem auto' }}>
                <Title level={2}> My Blogs </Title>
                <Row gutter={[32, 16]}>
                    {renderCards}
                </Row>
            
            </div>
        )
    }
    else{
        return (
            <>
            <div className="app">
                <FaCode style={{ fontSize: '4rem' }} /><br />
                <span style={{ fontSize: '2rem' }}>Let's Start Coding!</span>
            </div>
            </>
        )
    }
    }
    else{
        return (
            <>
            <div className="app">
                <FaCode style={{ fontSize: '4rem' }} /><br />
                <span style={{ fontSize: '2rem' }}>Let's Start Coding!</span>
            </div>
            </>
        )

    }

        
    }



export default LandingPage
