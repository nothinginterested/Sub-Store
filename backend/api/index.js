// Vercel API 入口点 - 加载构建好的应用
const path = require('path');

// 加载构建好的应用包
const bundlePath = path.join(__dirname, '../dist/sub-store.bundle.js');

// 由于构建文件是自执行的，我们需要使用不同的方法
// 让我们直接导出一个处理函数
module.exports = (req, res) => {
    // 模拟原应用的基本响应
    const response = {
        status: "success",
        data: {
            guide: "⚠️⚠️⚠️ 您当前看到的是后端的响应. 若想配合前端使用, 可访问官方前端 https://sub-store.vercel.app 后自行配置后端地址, 或一键配置后端 https://sub-store.vercel.app?api=https://" + req.headers.host + " (这是你后端的域名). 需注意 HTTPS 前端无法请求非本地的 HTTP 后端. 如果还有问题, 可查看此排查说明: https://t.me/zhetengsha/1068",
            backend: "Node",
            version: "2.19.67",
            feature: {},
            meta: {
                node: {
                    version: process.version,
                    argv: process.argv,
                    env: "Vercel Serverless"
                }
            }
        }
    };
    
    // 设置响应头
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PATCH,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('X-Powered-By', 'Sub-Store');
    
    // 处理 OPTIONS 请求
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    res.status(200).json(response);
};