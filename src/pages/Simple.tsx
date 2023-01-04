import {useState} from "react";
import getApi from "../data/data";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";

export const Simple = () => {
    const [value, setValue] = useState('');
    const [data, setData] = useState<any[]>([]);
    const element = <FontAwesomeIcon icon={faCircleInfo}/>

    async function simpleData() {
        const input = value
        if (input) {
            try {
                const res = await getApi.get(`?title=${input}`);
                setData(res.data);
            } catch (err) {
                console.log(err);
            }
        }
    }

    async function deleteDataById(id: any) {
        await getApi.delete(`/` + id);
        window.location.reload();
    }

    return (
        <>

            <div className="container">
                <div className="simple_search">
                    <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)}/>
                    <button className="simple_button" onClick={simpleData}>Search</button>
                </div>
                <div className="data">
                    {data.map(item => {
                        return (
                            <div className="bookmark_element" key={item.id}>
                                {/*<div className="bookmark_number"> {item.id} </div>*/}
                                <div className="bookmark_info">
                                    <div className="top">

                                        <div className="left">
                                            <div className="bookmark_name">{item.title}</div>
                                        </div>

                                        <div className="right">
                                            {item.tags.map((tag: string) => (
                                            <div className="bookmark_tags">{tag}</div>
                                            ))}
                                            <div className="info_logo">{element}</div>
                                        </div>

                                    </div>
                                    <div className="bottom">
                                        <a className="bookmark_URL" href={item.url}> {item.url}</a>
                                    </div>
                                </div>
                                <button className="delete_button" onClick={deleteDataById.bind(this, item.id)}>X</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )

}