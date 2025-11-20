/*
  Quantumult X 深度去广告脚本
  目标：彻底移除 basic/init 中所有广告、更新跳转、logo、无用字段
*/

let body = $response.body;
if (!body) $done({});

try {
    let obj = JSON.parse(body);

    if (obj?.data) {
        const d = obj.data;

        // --- 广告相关 ---
        d.startAd = null;
        d.startAdList = [];
        d.startAdShowTime = 0;

        // 清理广告字段（保险）
        delete d.startAd;
        delete d.startAdList;
        delete d.startAdShowTime;

        // --- 热更新相关 ---
        d.hasOpenHotUpdate = false;
        d.hotUpdateDailyTryCount = 0;
        delete d.hotUpdateList;
        delete d.hotUpdateUrl;

        // --- logo ---
        d.logoList = [];

        // --- 禁用引导页 跳更新页 ---
        d.downloadPageUrl = "";
        delete d.downloadPageUrl;

        // --- 强制关闭更新 ---
        d.appUpdateData = null;

        // --- 其他可选清理 ---
        d.quickMsgShowTime = 0;
        d.quickMsgActiveTime = 0;
    }

    $done({ body: JSON.stringify(obj) });

} catch (e) {
    console.log("basic_init_ultimate_clean error:", e);
    $done({ body });
}
