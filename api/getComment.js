export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  // 自己在这里增加、删减好评文案
  const textList = [
    "商家服务周到，整体体验非常满意，强烈推荐！",
    "体验超出预期，细节做得很到位，下次还会选择。",
    "各方面都很不错，性价比高，值得过来体验。",
    "服务态度很好，整体感受舒服，真心可以试一试。",
    "效果很棒，物有所值，整个过程让人很舒心。",
    "环境不错，工作人员细心，整体非常满意。",
    "对比下来这家很靠谱，体验很好，推荐大家。"
  ];

  const randomItem = textList[Math.floor(Math.random() * textList.length)];
  res.setHeader('Access‑Control‑Allow‑Origin', '*');
  res.status(200).json({ content: randomItem });
}
