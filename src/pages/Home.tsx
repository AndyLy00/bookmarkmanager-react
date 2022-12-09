import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons'
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import {JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState} from "react";
import axios from "axios";
// import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'

export const Home = () => {
    const element = <FontAwesomeIcon icon={faCircleInfo}/>
    const element2 = <FontAwesomeIcon icon={faCirclePlus}/>
    const main_url = 'http://127.0.0.1:5000/bookmarks';
    const [bookmarks, setBookmark] = useState<any>([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const {data} = await axios.get(main_url)
        setBookmark(data)
    }


    //
    // useEffect(() => {
    //     getData();
    // }, [])
    //
    // async function getData() {
    //
    //     fetch(main_url)
    //         .then((response) => response.json())
    //         .then((data) => console.log(data));
    // }


    // const data = require('../data/data.json');
    //
    // const DisplayData = data.bookmarks.map(
    //     (bookmark: any) => {
    //         return (
    //             <div className="bookmark_element">
    //                 <div className="bookmark_number"> {bookmark.id} </div>
    //                 <div className="bookmark_info">
    //                     <div className="top">
    //
    //                         <div className="left">
    //                             <div className="bookmark_name">{bookmark.title}</div>
    //                         </div>
    //
    //                         <div className="right">
    //                             <div className="bookmark_tags">{bookmark.tags}</div>
    //                             <div className="info_logo">{element}</div>
    //                         </div>
    //
    //                     </div>
    //                     <div className="bottom">
    //                         <div className="bookmark_URL"> {bookmark.url}</div>
    //                     </div>
    //                 </div>
    //             </div>
    //
    //         )
    //     }
    // )

    return (
        <>
            <div className="container">
                <div>
                    <div className="list"> Most popular
                        <button className="edit">Edit</button>
                    </div>
                    {bookmarks.map((bookmark: { id: React.Key | null | undefined; title: string; description: string; url: string; }) => (
                    <div key={bookmark.id}>
                        <div className="bookmark_element">
                            <div className="bookmark_number"> {bookmark.id} </div>
                            <div className="bookmark_info">
                                <div className="top">

                                    <div className="left">
                                        <div className="bookmark_name">{bookmark.title}</div>
                                    </div>

                                    <div className="right">
                                        <div className="bookmark_tags">{bookmark.description}</div>
                                        <div className="info_logo">{element}</div>
                                    </div>

                                </div>
                                <div className="bottom">
                                    <div className="bookmark_URL"> {bookmark.url}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                        ))}
                </div>

                <div>
                    <div className="list"> Recent
                        <button className="edit">Edit</button>
                    </div>
                    {/*<div className="data">{DisplayData}</div>*/}
                </div>
            </div>

            <div className="container">
                <div className="add_list">
                    <i className="element2"> {element2} </i>
                    <div className="add_list_text">Add list</div>
                </div>
            </div>
        </>
    )
}
