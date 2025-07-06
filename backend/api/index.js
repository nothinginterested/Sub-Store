// Vercel API 入口点 - 简单的包装器
module.exports = (req, res) => {
    // 设置基本的响应头
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // 处理 OPTIONS 请求
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    // 返回基本的 API 信息
    const response = {
        status: "success",
        data: {
            guide: "⚠️⚠️⚠️ 您当前看到的是后端的响应. 若想配合前端使用, 可访问官方前端 https://sub-store.vercel.app 后自行配置后端地址, 或一键配置后端 https://sub-store.vercel.app?api=" + req.headers.host + " (假设这是你后端的域名). 需注意 HTTPS 前端无法请求非本地的 HTTP 后端(部分浏览器上也无法访问本地 HTTP 后端). 请配置反代或在局域网自建 HTTP 前端. 如果还有问题, 可查看此排查说明: https://t.me/zhetengsha/1068",
            backend: "Node",
            version: "2.19.67",
            feature: {},
            meta: {
                node: {
                    version: process.version,
                    platform: process.platform,
                    env: "Vercel"
                }
            }
        }
    };
    
    res.status(200).json(response);
};