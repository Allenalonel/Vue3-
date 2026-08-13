import axios from "axios";
import { ref } from "vue";

export default function(){
    // 数据
    const imgs = ref(['https://img.btstu.cn/api/images/5a4ca29ea74cd.jpg']);
    // 方法
    async function addImgs(){
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        const json = response.data;
        const imgSrc = json.message;
        imgs.value.push(imgSrc);
    }
    return{imgs,addImgs};
}