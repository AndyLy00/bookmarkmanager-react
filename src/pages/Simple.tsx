import {useState} from "react";
import getApi from "../data/data";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";

export const Simple = () => {
    const element = <FontAwesomeIcon icon={faCircleInfo}/>
    const [value, setValue] = useState('');
    const [data, setData] = useState<any[]>([]);

    const search = async () => {
        const {data} = await getApi.get("/");
        let initBooks = data;
        let endBooks = [];
        let a = initBooks.filter(({"title": t}: any) => t && t.includes(value));
        let b = initBooks.filter(({"description": t}: any) => t && t.includes(value));
        let c = initBooks.filter(({"url": t}: any) => t && t.includes(value));
        let d = initBooks.filter(({"tags": t}: any) => t && t.includes(value));

        if (a) {
            endBooks.push(a);
        }
        if (b) {
            endBooks.push(b);
        }
        if (c) {
            endBooks.push(c);
        }
        if (d) {
            endBooks.push(d);
        }
        let e = endBooks.flat();

        const uniqueArray = Array.from(new Set(e.map(a => a.id)))
            .map(id => {
                return e.find(a => a.id === id)
            })
        console.log(uniqueArray);
        setData(uniqueArray);
        return uniqueArray;
    };

    async function deleteDataById(id: any) {
        await getApi.delete(`/` + id);
        window.location.reload();
    }

    return (
        <>

            <div className="container">
                <div className="simple_search">
                    <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)}/>
                    <button className="simple_button" onClick={search} value={value}>Search</button>
                </div>
                <div className="data">
                    {data.map(item => {
                        return (
                            <div className="bookmark_element" key={item.id}>
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
                                <button className="delete_button" onClick={deleteDataById}>X</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )

}