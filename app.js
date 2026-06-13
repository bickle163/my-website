const assets = {
  "product-real": {
    label: "真实产品图",
    src: "assets/images/product-real.jpg",
    original: "C:\\仪器大世界\\疼痛治疗\\WIRA\\CYP8\\CYP8图片库\\CYP8真实图.jpg",
    use: "产品主图、招商图、独立站产品模块"
  },
  "product-glow": {
    label: "真实发光图",
    src: "assets/images/product-glow.jpg",
    original: "C:\\仪器大世界\\疼痛治疗\\WIRA\\CYP8\\CYP8图片库\\CYP8真实发光图.jpg",
    use: "治疗氛围图、科技感图文、Facebook封面"
  },
  "clinical-treatment": {
    label: "临床治疗图",
    src: "assets/images/clinical-treatment.jpg",
    original: "C:\\仪器大世界\\疼痛治疗\\WIRA\\CYP8\\CYP8图片库\\CYP8临床治疗图1.jpg",
    use: "护理场景、康复中心、长护机构图文"
  },
  "foot-ulcer-reference": {
    label: "足部创面参考图",
    src: "assets/images/foot-ulcer-reference.jpg",
    original: "C:\\仪器大世界\\疼痛治疗\\WIRA\\CYP8\\CYP8图片库\\CYP8临床资料图Foot ulcers.jpg",
    use: "创面管理方向，仅用于内部参考或弱化处理"
  },
  "banner-1": {
    label: "官网Banner图1",
    src: "assets/images/banner-1.jpg",
    original: "C:\\仪器大世界\\疼痛治疗\\WIRA\\CYP8\\CYP8图片库\\灯 (4)\\灯\\Banner\\Banner 1.jpg",
    use: "独立站Banner、Google展示广告"
  },
  "banner-2": {
    label: "官网Banner图2",
    src: "assets/images/banner-2.jpg",
    original: "C:\\仪器大世界\\疼痛治疗\\WIRA\\CYP8\\CYP8图片库\\灯 (4)\\灯\\Banner\\Banner 2.jpg",
    use: "独立站Banner、LinkedIn封面"
  },
  "web-banner-en": {
    label: "英文网站Banner",
    src: "assets/images/web-banner-en.png",
    original: "C:\\仪器大世界\\疼痛治疗\\WIRA\\CYP8\\网站素材\\英文banner.png",
    use: "英文独立站、B2B广告素材"
  },
  "scenario-outdoor": {
    label: "场景图",
    src: "assets/images/scenario-outdoor.png",
    original: "C:\\仪器大世界\\疼痛治疗\\WIRA\\CYP8\\场景图\\户外1.png",
    use: "温暖场景、品牌形象、社媒封面"
  }
};

const platformData = {
  facebook: {
    label: "Facebook",
    kicker: "For Long-Term Care Facilities",
    style: "warm, human, real-care, low-jargon",
    cta: "Book a Demo",
    postOpener: "Long-term care teams need practical ways to support comfort, mobility and daily recovery routines."
  },
  google: {
    label: "Google Ads",
    kicker: "Professional Rehab Device",
    style: "clear, keyword-focused, conversion-oriented",
    cta: "Request Pricing",
    postOpener: "A non-invasive wIRA-based rehabilitation device for professional care settings."
  },
  linkedin: {
    label: "LinkedIn",
    kicker: "B2B Rehabilitation Solution",
    style: "professional, decision-maker focused, evidence-aware",
    cta: "Discuss Facility Solutions",
    postOpener: "For rehabilitation providers and long-term care operators, chronic pain and recovery management are becoming service-design priorities."
  },
  website: {
    label: "独立站",
    kicker: "CYP8 Rehabilitation System",
    style: "premium website hero, product-led, trustworthy",
    cta: "Explore CYP8",
    postOpener: "CYP8 is designed for rehabilitation centers, pain clinics and long-term care facilities that need a professional non-invasive care solution."
  },
  wechat: {
    label: "朋友圈 / 小红书",
    kicker: "欧洲长护中心康复新机会",
    style: "clear, story-led, business-friendly",
    cta: "了解合作方案",
    postOpener: "欧洲老龄化正在让长护中心面对更长期、更日常的疼痛和创面管理需求。"
  }
};

const templateData = {
  xiaohongshu: {
    label: "小红书竖版",
    width: 1080,
    height: 1440,
    platformHint: "wechat",
    languageHint: "zh",
    formatHint: "single",
    ctaZh: "了解长护中心合作方案",
    ctaEn: "Learn More",
    featuresZh: ["长护中心", "慢性疼痛管理", "非侵入式", "wIRA技术"],
    featuresEn: ["LTC care", "Pain management", "Non-invasive", "wIRA technology"],
    promptAdd: "vertical premium social media poster, Chinese healthcare business style, strong title hierarchy"
  },
  moments: {
    label: "朋友圈方图",
    width: 1080,
    height: 1080,
    platformHint: "wechat",
    languageHint: "zh",
    formatHint: "single",
    ctaZh: "预约演示 / 获取资料",
    ctaEn: "Request a Demo",
    featuresZh: ["欧洲养老", "康复设备", "创面与疼痛", "经销合作"],
    featuresEn: ["Elderly care", "Rehab device", "Pain & wound care", "Distribution"],
    promptAdd: "square WeChat business poster, clear selling point, professional and warm"
  },
  hero: {
    label: "独立站Hero",
    width: 1920,
    height: 800,
    platformHint: "website",
    languageHint: "en",
    formatHint: "banner",
    ctaZh: "查看CYP8方案",
    ctaEn: "Explore CYP8 Solutions",
    featuresZh: ["Professional Rehab", "wIRA", "LTC Ready"],
    featuresEn: ["Professional Rehab", "wIRA-Based", "LTC Ready"],
    promptAdd: "wide website hero banner, premium medical device website, clean conversion-focused layout"
  }
};

const audienceData = {
  ltc: {
    en: "European long-term care facilities",
    zh: "欧洲LTC长护中心",
    need: "support resident comfort, mobility and daily recovery routines",
    zhNeed: "提升住民舒适度、康复服务能力和日常护理效率"
  },
  rehab: {
    en: "rehabilitation centers and pain clinics",
    zh: "康复中心 / 疼痛诊所",
    need: "expand non-invasive chronic pain management programs",
    zhNeed: "增加非侵入式慢性疼痛管理项目"
  },
  wound: {
    en: "wound care and elderly care teams",
    zh: "创面护理和老年护理机构",
    need: "support wound care management with comfort-focused technology",
    zhNeed: "支持难愈合创面管理和长期护理服务"
  },
  distributor: {
    en: "European distributors",
    zh: "欧洲经销商",
    need: "build a differentiated rehabilitation equipment portfolio",
    zhNeed: "增加差异化康复设备产品线"
  },
  director: {
    en: "facility directors and procurement managers",
    zh: "机构负责人 / 采购主管",
    need: "evaluate practical, professional and cost-aware care equipment",
    zhNeed: "评估专业、实用、有性价比的康复设备"
  }
};

const topicData = {
  pain: {
    titleEn: "Support Chronic Pain Management",
    titleZh: "支持老年慢性疼痛管理",
    valueEn: "CYP8 uses water-filtered infrared-A technology to support deep, non-invasive rehabilitation care for chronic pain management programs.",
    valueZh: "CYP8基于wIRA水滤红外A技术，用于支持慢性疼痛管理和专业康复护理。",
    promptFocus: "elderly resident with chronic pain management routine, comfortable rehabilitation setting"
  },
  wound: {
    titleEn: "Support Wound Care Management",
    titleZh: "支持难愈合创面管理",
    valueEn: "Designed to support professional wound care management by creating a comfortable, non-invasive therapeutic environment.",
    valueZh: "用于支持专业创面护理管理，为长期护理场景提供非侵入式技术选择。",
    promptFocus: "wound care consultation, elderly care setting, no visible blood, calm clinical atmosphere"
  },
  ltc: {
    titleEn: "Upgrade Daily Care Programs",
    titleZh: "升级长护中心日常康复服务",
    valueEn: "Help long-term care facilities add a practical rehabilitation modality for comfort-focused resident care.",
    valueZh: "帮助长护中心增加日常康复服务项目，提升护理体验和机构服务能力。",
    promptFocus: "long-term care facility, caregiver helping elderly resident, professional rehabilitation device"
  },
  tech: {
    titleEn: "wIRA-Based Deep Energy Technology",
    titleZh: "wIRA深层能量技术",
    valueEn: "Water-filtered infrared-A technology is designed for deep tissue energy delivery while maintaining a non-invasive care experience.",
    valueZh: "wIRA水滤红外A技术强调深层组织能量传递，同时保持非侵入式体验。",
    promptFocus: "clean medical technology visual, soft infrared light, professional device close-up"
  },
  distributor: {
    titleEn: "A Differentiated Rehab Device Portfolio",
    titleZh: "差异化康复设备招商方案",
    valueEn: "CYP8 combines professional rehabilitation positioning with a cost-aware channel strategy for European distributors.",
    valueZh: "CYP8兼具专业康复定位和渠道价格优势，适合欧洲经销商拓展新品类。",
    promptFocus: "professional product presentation, distributor meeting, European healthcare business context"
  }
};

const toneData = {
  warm: {
    label: "温暖护理感",
    visual: "warm daylight, calm faces, clean long-term care interior, human-centered composition",
    words: ["comfort", "care", "support", "daily recovery"]
  },
  clinical: {
    label: "专业医学感",
    visual: "clean clinical environment, therapist and patient, accurate device placement, restrained medical color palette",
    words: ["professional", "clinical", "non-invasive", "protocol"]
  },
  tech: {
    label: "科技感",
    visual: "premium medical technology lighting, controlled infrared glow, clean product close-up, precise and modern",
    words: ["wIRA", "deep energy", "temperature control", "rehabilitation technology"]
  },
  business: {
    label: "B2B招商感",
    visual: "European healthcare business setting, product demonstration, confident professional atmosphere",
    words: ["portfolio", "facility solution", "distributor", "ROI-aware"]
  }
};

function $(id) {
  return document.getElementById(id);
}

function valueOf(id, fallback) {
  const element = $(id);
  return element ? element.value : fallback;
}

function setValue(id, value) {
  const element = $(id);
  if (element) element.value = value;
}

function getState() {
  return {
    platform: valueOf("platform", "wechat"),
    format: valueOf("format", "single"),
    template: valueOf("template", "moments"),
    audience: valueOf("audience", "ltc"),
    topic: valueOf("topic", "pain"),
    tone: valueOf("tone", "warm"),
    language: valueOf("language", "zh"),
    asset: valueOf("asset", "product-real"),
    note: $("note") ? $("note").value.trim() : ""
  };
}

function bilingual(en, zh, language) {
  if (language === "zh") return zh;
  if (language === "bilingual") return `${en}\n${zh}`;
  return en;
}

function buildCopy(state) {
  const platform = platformData[state.platform];
  const template = templateData[state.template];
  const audience = audienceData[state.audience];
  const topic = topicData[state.topic];
  const tone = toneData[state.tone];
  const asset = assets[state.asset];
  const isZh = state.language === "zh";
  const isBilingual = state.language === "bilingual";
  const title = bilingual(topic.titleEn, topic.titleZh, state.language);
  const subtitle = bilingual(
    "Non-invasive wIRA-based rehabilitation technology for professional care settings.",
    "面向专业护理和康复场景的非侵入式wIRA康复技术。",
    state.language
  );
  const kicker = bilingual(platform.kicker, state.platform === "wechat" ? platform.kicker : audience.zh, state.language);

  const cta = isZh || isBilingual ? template.ctaZh : template.ctaEn;
  const postEn = `${platform.postOpener}\n\n${topic.valueEn}\n\nBest-fit settings: ${audience.en}. Use it to ${audience.need}.\n\nCTA: ${cta}`;
  const postZh = `${platform.postOpener}\n\n${topic.valueZh}\n\n适合场景：${audience.zh}。核心价值：${audience.zhNeed}。\n\n行动引导：${cta}`;

  const headlinesEn = [
    topic.titleEn,
    `For ${audience.en}`,
    "Non-Invasive wIRA Rehab Technology",
    cta
  ];
  const headlinesZh = [
    topic.titleZh,
    `面向${audience.zh}`,
    "非侵入式wIRA康复技术",
    cta
  ];

  const imageCopy = [
    `主标题：${title}`,
    `副标题：${subtitle}`,
    `角标：${kicker}`,
    `按钮：${cta}`,
    `模板：${template.label} ${template.width}×${template.height}`
  ].join("\n");

  const adCopy = [
    "广告标题备选：",
    ...(isZh ? headlinesZh : headlinesEn).map((line, i) => `${i + 1}. ${line}`),
    "",
    `CTA：${cta}`,
    `推荐版式：${formatLabel(state.format)}`
  ].join("\n");

  const prompt = [
    `Create a ${platform.style} advertising visual for CYP8 rehabilitation device.`,
    `Scene: ${topic.promptFocus}.`,
    `Audience: ${audience.en}.`,
    `Visual tone: ${tone.visual}.`,
    `Template requirement: ${template.promptAdd}.`,
    "Use a real product photo as the device reference; keep the product accurate and recognizable.",
    "Avoid exaggerated illness, blood, distress, miracle-cure messaging, or before-after claims.",
    "Composition should leave clean space for headline text and CTA.",
    state.note ? `Extra request: ${state.note}` : ""
  ].filter(Boolean).join(" ");

  const compliance = [
    "建议使用：support / may help / designed for / non-invasive / professional care settings / care management",
    "避免使用：cure / heal completely / guaranteed results / eliminate pain / 100% effective / permanent recovery",
    "创面主题建议弱化血腥画面，避免夸张前后对比。",
    "广告语不要暗示平台知道用户健康状况，例如避免“You suffer from chronic pain”。",
    "建议最终投放前再由熟悉当地法规的人做一次审核。"
  ].join("\n");

  const assetCopy = [
    `当前素材：${asset.label}`,
    `当前模板：${template.label} (${template.width}×${template.height})`,
    `用途：${asset.use}`,
    `工作台素材：${asset.src}`,
    `原始路径：${asset.original}`,
    "",
    "推荐补充素材：",
    "1. 产品白底图：适合Google广告和独立站",
    "2. 产品发光图：适合Facebook和科技风",
    "3. LTC老人护理场景：适合温暖风格",
    "4. 创面护理图：仅建议做克制、专业化处理"
  ].join("\n");

  const postCopy = isBilingual ? `${postEn}\n\n---\n${postZh}` : (isZh ? postZh : postEn);

  return {
    posterTitle: isZh ? topic.titleZh : topic.titleEn,
    posterSub: isZh ? "面向专业护理和康复场景的非侵入式wIRA康复技术。" : "Non-invasive wIRA-based rehabilitation technology for professional care settings.",
    posterKicker: isZh ? audience.zh : platform.kicker,
    imageCopy,
    postCopy,
    adCopy,
    prompt,
    compliance,
    assetCopy,
    asset,
    cta,
    features: isZh ? template.featuresZh : template.featuresEn,
    template
  };
}

function formatLabel(format) {
  return {
    single: "单图图文：主标题 + 副标题 + CTA",
    carousel: "轮播图：问题页 / 技术页 / 场景页 / CTA页",
    banner: "Banner：左侧文字，右侧产品或场景",
    ad: "广告文案：短标题，多版本测试",
    landing: "详情页模块：价值主张 + 三卖点 + 咨询按钮"
  }[format];
}

function render() {
  const state = getState();
  const result = buildCopy(state);
  if (!$("poster")) return;
  $("poster").className = `poster-wrap template-${state.template}`;
  $("posterImage").src = result.asset.src;
  $("posterImage").alt = result.asset.label;
  $("posterKicker").textContent = result.posterKicker;
  $("posterTitle").textContent = result.posterTitle;
  $("posterSub").textContent = result.posterSub;
  if ($("posterCta")) $("posterCta").textContent = result.cta;
  if ($("posterFeatures")) $("posterFeatures").innerHTML = result.features.map((feature) => `<span>${feature}</span>`).join("");
  $("imageCopy").textContent = result.imageCopy;
  $("postCopy").textContent = result.postCopy;
  $("adCopy").textContent = result.adCopy;
  $("promptCopy").textContent = result.prompt;
  $("complianceCopy").textContent = result.compliance;
  $("assetCopy").textContent = result.assetCopy;
}

function allOutputText() {
  return [
    "CYP8图文内容工作台输出",
    "",
    "【图片中文字】",
    $("imageCopy").textContent,
    "",
    "【平台正文】",
    $("postCopy").textContent,
    "",
    "【广告标题 / CTA】",
    $("adCopy").textContent,
    "",
    "【图片生成提示词】",
    $("promptCopy").textContent,
    "",
    "【合规检查】",
    $("complianceCopy").textContent,
    "",
    "【推荐素材】",
    $("assetCopy").textContent
  ].join("\n");
}

async function copyAll() {
  await navigator.clipboard.writeText(allOutputText());
  $("copyAllBtn").textContent = "已复制";
  setTimeout(() => ($("copyAllBtn").textContent = "复制全部文案"), 1400);
}

function downloadTxt() {
  const blob = new Blob([allOutputText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `CYP8图文输出_${new Date().toISOString().slice(0, 10)}.txt`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function downloadPng() {
  downloadTemplatePng(getState().template);
}

function downloadTemplatePng(templateKey) {
  const state = { ...getState(), template: templateKey };
  const result = buildCopy(state);
  const template = result.template;
  const canvas = $("exportCanvas");
  canvas.width = template.width;
  canvas.height = template.height;
  const ctx = canvas.getContext("2d");
  const temp = new Image();
  temp.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCoverImage(ctx, temp, 0, 0, canvas.width, canvas.height);
    const isHero = templateKey === "hero";
    const gradient = isHero ? ctx.createLinearGradient(0, 0, canvas.width, 0) : ctx.createLinearGradient(0, canvas.height, 0, 0);
    gradient.addColorStop(0, "rgba(12, 26, 28, 0.88)");
    gradient.addColorStop(isHero ? 0.58 : 0.48, "rgba(12, 26, 28, 0.38)");
    gradient.addColorStop(1, "rgba(12, 26, 28, 0.08)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawPosterText(ctx, result, templateKey, canvas.width, canvas.height);
    const link = document.createElement("a");
    link.download = `CYP8_${template.label}_${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };
  temp.src = result.asset.src;
}

function drawPosterText(ctx, result, templateKey, width, height) {
  const isHero = templateKey === "hero";
  const left = isHero ? 110 : 72;
  const top = isHero ? 74 : 70;
  const contentY = isHero ? Math.round(height * 0.42) : Math.round(height * 0.55);
  const maxWidth = isHero ? Math.round(width * 0.48) : width - left * 2;
  ctx.fillStyle = "#ffffff";
  ctx.font = `900 ${isHero ? 42 : 34}px Segoe UI, Microsoft YaHei, Arial`;
  ctx.fillText("CYP8", left, top);
  ctx.font = `700 ${isHero ? 22 : 20}px Segoe UI, Microsoft YaHei, Arial`;
  ctx.fillStyle = "rgba(255,255,255,0.84)";
  ctx.fillText("wIRA Rehabilitation System", left + (isHero ? 110 : 90), top);
  ctx.font = `800 ${isHero ? 30 : 28}px Segoe UI, Microsoft YaHei, Arial`;
  ctx.fillStyle = "#eaf5f2";
  ctx.fillText(result.posterKicker, left, contentY);
  ctx.font = `900 ${isHero ? 76 : 82}px Segoe UI, Microsoft YaHei, Arial`;
  ctx.fillStyle = "#ffffff";
  const titleEndY = wrapText(ctx, result.posterTitle, left, contentY + 92, maxWidth, isHero ? 82 : 92);
  ctx.font = `500 ${isHero ? 30 : 32}px Segoe UI, Microsoft YaHei, Arial`;
  ctx.fillStyle = "rgba(255,255,255,0.9)";
  const subEndY = wrapText(ctx, result.posterSub, left, titleEndY + 34, maxWidth, isHero ? 42 : 46);
  drawFeaturePills(ctx, result.features, left, subEndY + 34, maxWidth);
  ctx.fillStyle = "#d7664f";
  const ctaY = Math.min(height - 116, subEndY + 120);
  roundRect(ctx, left, ctaY, isHero ? 300 : 360, isHero ? 62 : 68, 12);
  ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.font = `900 ${isHero ? 24 : 28}px Segoe UI, Microsoft YaHei, Arial`;
  ctx.fillText(result.cta, left + 28, ctaY + (isHero ? 40 : 44));
}

function drawFeaturePills(ctx, features, x, y, maxWidth) {
  let cursorX = x;
  let cursorY = y;
  ctx.font = "800 22px Segoe UI, Microsoft YaHei, Arial";
  for (const feature of features) {
    const textWidth = ctx.measureText(feature).width;
    const pillWidth = textWidth + 34;
    if (cursorX + pillWidth > x + maxWidth) {
      cursorX = x;
      cursorY += 48;
    }
    ctx.fillStyle = "rgba(255,255,255,0.16)";
    roundRect(ctx, cursorX, cursorY, pillWidth, 36, 18);
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.28)";
    ctx.stroke();
    ctx.fillStyle = "#ffffff";
    ctx.fillText(feature, cursorX + 17, cursorY + 25);
    cursorX += pillWidth + 12;
  }
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function drawCoverImage(ctx, img, x, y, w, h) {
  const imageRatio = img.width / img.height;
  const canvasRatio = w / h;
  let sx = 0;
  let sy = 0;
  let sw = img.width;
  let sh = img.height;
  if (imageRatio > canvasRatio) {
    sw = img.height * canvasRatio;
    sx = (img.width - sw) / 2;
  } else {
    sh = img.width / canvasRatio;
    sy = (img.height - sh) / 2;
  }
  ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(/\s+/);
  let line = "";
  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + " ";
    if (ctx.measureText(testLine).width > maxWidth && i > 0) {
      ctx.fillText(line.trim(), x, y);
      line = words[i] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, y);
  return y;
}

function downloadAllTemplates() {
  ["xiaohongshu", "moments", "hero"].forEach((template, index) => {
    setTimeout(() => downloadTemplatePng(template), index * 450);
  });
}

function resetForm() {
  setValue("platform", "wechat");
  setValue("format", "single");
  setValue("template", "moments");
  setValue("audience", "ltc");
  setValue("topic", "pain");
  setValue("tone", "warm");
  setValue("language", "zh");
  setValue("asset", "product-real");
  if ($("note")) $("note").value = "";
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  render();
  if ($("generateBtn")) $("generateBtn").addEventListener("click", render);
  if ($("resetBtn")) $("resetBtn").addEventListener("click", resetForm);
  if ($("copyAllBtn")) $("copyAllBtn").addEventListener("click", copyAll);
  if ($("downloadTxtBtn")) $("downloadTxtBtn").addEventListener("click", downloadTxt);
  if ($("downloadPngBtn")) $("downloadPngBtn").addEventListener("click", downloadPng);
  if ($("downloadAllBtn")) $("downloadAllBtn").addEventListener("click", downloadAllTemplates);
  if ($("template")) {
    $("template").addEventListener("change", () => {
      const template = templateData[$("template").value];
      if (template) {
        setValue("platform", template.platformHint);
        setValue("language", template.languageHint);
        setValue("format", template.formatHint);
      }
      render();
    });
  }
  document.querySelectorAll("select").forEach((select) => select.addEventListener("change", render));
});
