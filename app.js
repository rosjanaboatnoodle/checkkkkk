/* ===================== ภาษา ===================== */
const LANGS = {th: ['ไทย', 'th-TH'], en: ['English', 'en-US'], zh: ['中文', 'zh-CN'], my: ['မြန်မာ', 'my-MM'], lo: ['ລາວ', 'lo-LA'], ja: ['日本語', 'ja-JP'], ko: ['한국어', 'ko-KR'], vi: ['Tiếng Việt', 'vi-VN'], km: ['ខ្មែរ', 'km-KH'], ru: ['Русский', 'ru-RU']};
const I18N = {
th: {tables: 'โต๊ะ', orders: 'ออเดอร์', kitchen: 'ครัว', serve: 'เสิร์ฟ', bill: 'เช็คบิล', table: 'โต๊ะ', takeaway: 'กลับบ้าน', free: 'ว่าง', pending: 'ยอดรอชำระ', all: 'ทั้งหมด', total: 'รวม', send: 'ส่งออเดอร์', sent: 'สั่งแล้ว', cart: 'ตะกร้า', add: 'เพิ่ม', note: 'หมายเหตุ', req: 'ต้องเลือก', choose: 'กรุณาเลือก', done: 'เสร็จสิ้น', doneAll: 'เสร็จทั้งหมด', order: 'สั่งอาหาร', move: 'ย้ายโต๊ะ', cancel: 'ยกเลิก', confirm: 'ยืนยัน', confirmPrint: 'ยืนยัน + พิมพ์', cash: 'เงินสด', qr: 'โอน / QR', recv: 'รับเงินมา', change: 'เงินทอน', disc: 'ส่วนลด', net: 'ยอดสุทธิ', pay: 'ชำระเงิน', print: 'พิมพ์', items: 'รายการ', by: 'โดย', cust: 'ลูกค้า', stNew: 'กำลังทำ', stCooked: 'พร้อมเสิร์ฟ', stServed: 'เสิร์ฟแล้ว', callStaff: 'เรียกพนักงาน', empty: 'ไม่มีรายการ', out: 'หมด', loading: 'กำลังโหลด…', closed: 'ร้านยังไม่เปิดระบบสั่งอาหาร', sentOk: 'ส่งออเดอร์แล้ว', fail: 'ไม่สำเร็จ ลองอีกครั้ง', more: 'เลือกเพิ่ม', lang: 'ภาษา', baht: 'บาท', log: 'แจ้งเตือน', del: 'ลบรายการนี้?', pickTable: 'เลือกโต๊ะ', draft: 'รายการใหม่', billSlip: 'ใบแจ้ง', called: 'แจ้งแล้ว', back: 'กลับ',
  sOrder: '{0} สั่งใหม่ {1} รายการ', sCooked: '{0} {1} พร้อมเสิร์ฟ', sCookedAll: '{0} อาหารพร้อมเสิร์ฟ', sServed: '{0} เสิร์ฟ {1} แล้ว', sServedAll: '{0} เสิร์ฟครบแล้ว', sBill: '{0} เรียกเช็คบิล', sStaff: '{0} เรียกพนักงาน', sCash: '{0} ชำระ {1} บาท รับมา {2} บาท เงินทอน {3} บาท', sQr: '{0} โอนชำระ {1} บาท'},
en: {tables: 'Tables', orders: 'Order', kitchen: 'Kitchen', serve: 'Serve', bill: 'Bill', table: 'Table', takeaway: 'Takeaway', free: 'Free', pending: 'Unpaid', all: 'All', total: 'Total', send: 'Send order', sent: 'Ordered', cart: 'Cart', add: 'Add', note: 'Note', req: 'required', choose: 'Please choose', done: 'Done', doneAll: 'All done', order: 'Order food', move: 'Move table', cancel: 'Cancel', confirm: 'Confirm', confirmPrint: 'Confirm + print', cash: 'Cash', qr: 'Transfer / QR', recv: 'Received', change: 'Change', disc: 'Discount', net: 'Net total', pay: 'Pay', print: 'Print', items: 'items', by: 'by', cust: 'Customer', stNew: 'Preparing', stCooked: 'Ready', stServed: 'Served', callStaff: 'Call staff', empty: 'Nothing here', out: 'Sold out', loading: 'Loading…', closed: 'Ordering is not open yet', sentOk: 'Order sent', fail: 'Failed, please try again', more: 'Add more', lang: 'Language', baht: 'baht', log: 'Notifications', del: 'Remove this item?', pickTable: 'Choose a table', draft: 'New items', billSlip: 'Bill slip', called: 'Staff notified', back: 'Back',
  sOrder: '{0}, new order, {1} items', sCooked: '{0}, {1} is ready to serve', sCookedAll: '{0}, food is ready to serve', sServed: '{0}, {1} served', sServedAll: '{0}, all served', sBill: '{0} asks for the bill', sStaff: '{0} is calling staff', sCash: '{0} paid {1} baht, received {2}, change {3} baht', sQr: '{0} paid {1} baht by transfer'},
zh: {table: '桌', takeaway: '外带', all: '全部', total: '合计', send: '确认下单', sent: '已点', cart: '购物车', add: '加入', note: '备注', req: '必选', choose: '请选择', order: '点餐', bill: '结账', cancel: '取消', confirm: '确认', stNew: '制作中', stCooked: '待上菜', stServed: '已上菜', callStaff: '呼叫服务员', empty: '暂无', out: '售罄', loading: '加载中…', closed: '本店尚未开放点餐', sentOk: '已下单', fail: '失败，请重试', more: '继续点餐', lang: '语言', baht: '泰铢', called: '已通知店员', items: '项', back: '返回',
  sOrder: '{0} 新订单 {1} 项', sCooked: '{0} {1} 可以上菜', sCookedAll: '{0} 菜品可以上菜', sServed: '{0} {1} 已上菜', sServedAll: '{0} 已全部上菜', sBill: '{0} 要结账', sStaff: '{0} 呼叫服务员', sCash: '{0} 应付 {1} 泰铢，收 {2}，找零 {3} 泰铢', sQr: '{0} 转账 {1} 泰铢'},
my: {tables: 'စားပွဲ', orders: 'အော်ဒါ', kitchen: 'မီးဖိုချောင်', serve: 'ပို့ရန်', bill: 'ငွေရှင်း', table: 'စားပွဲ', takeaway: 'ကလပ်ဘန်', free: 'လွတ်', pending: 'ရှင်းရန်ကျန်', all: 'အားလုံး', total: 'စုစုပေါင်း', send: 'အော်ဒါပို့', sent: 'မှာပြီး', cart: 'ခြင်း', add: 'ထည့်', note: 'မှတ်ချက်', req: 'ရွေးရန်လို', choose: 'ရွေးပါ', done: 'ပြီးပြီ', doneAll: 'အားလုံးပြီး', order: 'အစားအစာမှာ', move: 'စားပွဲပြောင်း', cancel: 'မလုပ်တော့', confirm: 'အတည်ပြု', confirmPrint: 'အတည်ပြု + ပရင့်', cash: 'ငွေသား', qr: 'ငွေလွှဲ / QR', recv: 'လက်ခံငွေ', change: 'ပြန်အမ်းငွေ', disc: 'လျှော့စျေး', net: 'ကျသင့်ငွေ', pay: 'ငွေရှင်း', print: 'ပရင့်', items: 'မျိုး', by: 'မှ', cust: 'ဧည့်သည်', stNew: 'ချက်နေသည်', stCooked: 'ပို့ရန်အသင့်', stServed: 'ပို့ပြီး', callStaff: 'ဝန်ထမ်းခေါ်', empty: 'မရှိပါ', out: 'ကုန်', loading: 'ဖွင့်နေသည်…', closed: 'ဆိုင်မဖွင့်သေးပါ', sentOk: 'အော်ဒါပို့ပြီး', fail: 'မအောင်မြင်ပါ', more: 'ထပ်ရွေး', lang: 'ဘာသာစကား', baht: 'ဘတ်', log: 'အသိပေးချက်', del: 'ဖျက်မလား?', pickTable: 'စားပွဲရွေးပါ', draft: 'အသစ်', billSlip: 'ဘေလ်', called: 'အကြောင်းကြားပြီး', back: 'နောက်သို့',
  sOrder: '{0} အော်ဒါအသစ် {1} မျိုး', sCooked: '{0} {1} ပို့ရန်အသင့်', sCookedAll: '{0} အစားအစာ အသင့်ဖြစ်ပြီ', sServed: '{0} {1} ပို့ပြီး', sServedAll: '{0} အားလုံးပို့ပြီး', sBill: '{0} ငွေရှင်းမည်', sStaff: '{0} ဝန်ထမ်းခေါ်နေသည်', sCash: '{0} ကျသင့်ငွေ {1} ဘတ်၊ လက်ခံ {2} ဘတ်၊ ပြန်အမ်း {3} ဘတ်', sQr: '{0} ငွေလွှဲ {1} ဘတ်'},
lo: {tables: 'ໂຕະ', orders: 'ອໍເດີ', kitchen: 'ຄົວ', serve: 'ເສີບ', bill: 'ເຊັກບິນ', table: 'ໂຕະ', takeaway: 'ກັບບ້ານ', free: 'ຫວ່າງ', pending: 'ຍອດລໍຖ້າຈ່າຍ', all: 'ທັງໝົດ', total: 'ລວມ', send: 'ສົ່ງອໍເດີ', sent: 'ສັ່ງແລ້ວ', cart: 'ກະຕ່າ', add: 'ເພີ່ມ', note: 'ໝາຍເຫດ', req: 'ຕ້ອງເລືອກ', choose: 'ກະລຸນາເລືອກ', done: 'ສຳເລັດ', doneAll: 'ສຳເລັດທັງໝົດ', order: 'ສັ່ງອາຫານ', move: 'ຍ້າຍໂຕະ', cancel: 'ຍົກເລີກ', confirm: 'ຢືນຢັນ', confirmPrint: 'ຢືນຢັນ + ພິມ', cash: 'ເງິນສົດ', qr: 'ໂອນ / QR', recv: 'ຮັບເງິນມາ', change: 'ເງິນທອນ', disc: 'ສ່ວນຫຼຸດ', net: 'ຍອດສຸດທິ', pay: 'ຈ່າຍເງິນ', print: 'ພິມ', items: 'ລາຍການ', by: 'ໂດຍ', cust: 'ລູກຄ້າ', stNew: 'ກຳລັງເຮັດ', stCooked: 'ພ້ອມເສີບ', stServed: 'ເສີບແລ້ວ', callStaff: 'ເອີ້ນພະນັກງານ', empty: 'ບໍ່ມີລາຍການ', out: 'ໝົດ', loading: 'ກຳລັງໂຫຼດ…', closed: 'ຮ້ານຍັງບໍ່ເປີດລະບົບສັ່ງອາຫານ', sentOk: 'ສົ່ງອໍເດີແລ້ວ', fail: 'ບໍ່ສຳເລັດ ລອງໃໝ່', more: 'ເລືອກເພີ່ມ', lang: 'ພາສາ', baht: 'ບາດ', log: 'ແຈ້ງເຕືອນ', del: 'ລຶບລາຍການນີ້?', pickTable: 'ເລືອກໂຕະ', draft: 'ລາຍການໃໝ່', billSlip: 'ໃບແຈ້ງ', called: 'ແຈ້ງແລ້ວ', back: 'ກັບ',
  sOrder: '{0} ສັ່ງໃໝ່ {1} ລາຍການ', sCooked: '{0} {1} ພ້ອມເສີບ', sCookedAll: '{0} ອາຫານພ້ອມເສີບ', sServed: '{0} ເສີບ {1} ແລ້ວ', sServedAll: '{0} ເສີບຄົບແລ້ວ', sBill: '{0} ເອີ້ນເຊັກບິນ', sStaff: '{0} ເອີ້ນພະນັກງານ', sCash: '{0} ຈ່າຍ {1} ບາດ ຮັບມາ {2} ບາດ ເງິນທອນ {3} ບາດ', sQr: '{0} ໂອນຈ່າຍ {1} ບາດ'}
};
const I18N2 = {
th: {orderMore: 'สั่งเพิ่ม', split: 'แยกจ่าย', quick: 'เช็คบิลด่วน', cancelTb: 'ยกเลิกรายการทั้งโต๊ะ?', qtyH: 'จำนวน', priceH: 'ราคา', statusH: 'สถานะ', itemH: 'รายการ', exact: 'ชำระพอดี', clear: 'ล้าง', fee: 'ค่าบริการเพิ่ม', search: 'ค้นหาชื่อหรือราคา', selPay: 'เลือกรายการที่ต้องการจ่าย', invoice: 'ใบเรียกเก็บเงิน', short: 'ขาดอีก'},
en: {orderMore: 'Order more', split: 'Split bill', quick: 'Quick bill', cancelTb: 'Cancel everything on this table?', qtyH: 'Qty', priceH: 'Price', statusH: 'Status', itemH: 'Item', exact: 'Exact amount', clear: 'Clear', fee: 'Extra charge', search: 'Search name or price', selPay: 'Select items to pay', invoice: 'Bill', short: 'Short by'},
zh: {search: '搜索名称或价格'},
my: {orderMore: 'ထပ်မှာ', split: 'ခွဲရှင်း', quick: 'အမြန်ဘေလ်', cancelTb: 'စားပွဲတစ်ခုလုံး ဖျက်မလား?', qtyH: 'အရေအတွက်', priceH: 'စျေးနှုန်း', statusH: 'အခြေအနေ', itemH: 'စာရင်း', exact: 'အတိအကျ', clear: 'ရှင်း', fee: 'အပိုကြေး', search: 'အမည် သို့မဟုတ် စျေးနှုန်းဖြင့်ရှာ', selPay: 'ရှင်းမည့်စာရင်းရွေးပါ', invoice: 'ငွေတောင်းခံလွှာ', short: 'လိုသေး'},
lo: {orderMore: 'ສັ່ງເພີ່ມ', split: 'ແຍກຈ່າຍ', quick: 'ເຊັກບິນດ່ວນ', cancelTb: 'ຍົກເລີກທັງໂຕະ?', qtyH: 'ຈຳນວນ', priceH: 'ລາຄາ', statusH: 'ສະຖານະ', itemH: 'ລາຍການ', exact: 'ຈ່າຍພໍດີ', clear: 'ລ້າງ', fee: 'ຄ່າບໍລິການເພີ່ມ', search: 'ຄົ້ນຫາຊື່ ຫຼື ລາຄາ', selPay: 'ເລືອກລາຍການທີ່ຈະຈ່າຍ', invoice: 'ໃບເກັບເງິນ', short: 'ຂາດອີກ'}};
const I18N3 = {
th: {printQr: 'ปริ้น QR code', history: 'ประวัติการสั่ง', units: 'หน่วย', rec: 'แนะนำ', hot: 'ขายดี', pick1: 'เลือก 1 ข้อ', pickMany: 'เลือกได้หลายข้อ', clearQ: 'ล้างรายการใหม่ที่ยังไม่ส่ง?', scan: 'สแกนเพื่อสั่งอาหาร', paidToday: 'บิลที่ชำระแล้ววันนี้'},
en: {printQr: 'Print QR code', history: 'Order history', units: 'units', rec: 'Recommended', hot: 'Popular', pick1: 'choose 1', pickMany: 'choose any', clearQ: 'Clear unsent items?', scan: 'Scan to order', paidToday: 'Bills paid today'},
zh: {rec: '推荐', hot: '热销', pick1: '选1项', pickMany: '可多选', scan: '扫码点餐'},
my: {printQr: 'QR ပရင့်', history: 'မှာထားသည့်မှတ်တမ်း', units: 'ခု', rec: 'အကြံပြု', hot: 'ရောင်းအားကောင်း', pick1: '၁ ခုရွေး', pickMany: 'အများရွေးနိုင်', clearQ: 'မပို့ရသေးသည်များ ဖျက်မလား?', scan: 'မှာရန် စကင်ဖတ်ပါ', paidToday: 'ယနေ့ရှင်းပြီးဘေလ်'},
lo: {printQr: 'ພິມ QR code', history: 'ປະຫວັດການສັ່ງ', units: 'ໜ່ວຍ', rec: 'ແນະນຳ', hot: 'ຂາຍດີ', pick1: 'ເລືອກ 1 ຂໍ້', pickMany: 'ເລືອກໄດ້ຫຼາຍຂໍ້', clearQ: 'ລ້າງລາຍການໃໝ່?', scan: 'ສະແກນເພື່ອສັ່ງອາຫານ', paidToday: 'ບິນທີ່ຈ່າຍແລ້ວມື້ນີ້'}};
Object.keys(I18N2).forEach(l => Object.assign(I18N[l], I18N2[l], I18N3[l]));
Object.assign(I18N.th, {stWait: 'รอชำระ', min: 'นาที', again: 'อีก 1', moreAct: 'เพิ่มเติม'});
Object.assign(I18N.en, {stWait: 'To pay', min: 'min', again: '1 more', moreAct: 'More'});
Object.assign(I18N.my, {stWait: 'ငွေရှင်းရန်', min: 'မိနစ်', again: 'နောက် ၁', moreAct: 'နောက်ထပ်'});
Object.assign(I18N.lo, {stWait: 'ລໍຖ້າຈ່າຍ', min: 'ນາທີ', again: 'ອີກ 1', moreAct: 'ເພີ່ມເຕີມ'});
Object.assign(I18N.th, {sentPrint: 'ส่งไปพิมพ์ที่เคาน์เตอร์แล้ว', round: 'รอบ', more2: 'สั่งเพิ่ม', toMake: 'ต้องทำรวม', autoC: 'อัตโนมัติ', imgOn: 'รูป: เปิด', imgOff: 'รูป: ปิด'});
Object.assign(I18N.en, {sentPrint: 'Sent to the counter printer', round: 'Round', more2: 'added', toMake: 'To make', autoC: 'Auto', imgOn: 'Photos: on', imgOff: 'Photos: off'});
Object.assign(I18N.th, {sOrderC: '{0} สั่งใหม่'});
Object.assign(I18N.th, {closeTb: 'ปิดโต๊ะ', closeQ: 'ปิดโต๊ะ {0} และยกเลิกรายการที่ยังไม่จ่ายทั้งหมด?', voidItems: 'ยกเลิกรายการ', voidPick: 'เลือกรายการที่จะยกเลิก', voidDo: 'ยกเลิก {0} หน่วย', sCancel: '{0} ยกเลิก {1}', allMenu: 'เมนูทั้งหมด', quickAdd: 'สั่งเพิ่มด่วน', quickEdit: 'เลือกเมนู', repeat: 'สั่งซ้ำ', listV: 'แบบรายการ', perRow: 'ต่อแถว'});
Object.assign(I18N.en, {sOrderC: '{0}, new order:'});
Object.assign(I18N.en, {closeTb: 'Close table', closeQ: 'Close {0} and cancel all unpaid items?', voidItems: 'Cancel items', voidPick: 'Choose items to cancel', voidDo: 'Cancel {0}', sCancel: '{0} cancelled {1}', allMenu: 'Full menu', quickAdd: 'Quick add', quickEdit: 'Choose items', repeat: 'Repeat', listV: 'List', perRow: 'per row'});
Object.assign(I18N.my, {sOrderC: '{0} အော်ဒါအသစ်'});
Object.assign(I18N.my, {closeTb: 'စားပွဲပိတ်', voidItems: 'ဟင်းပွဲဖျက်', voidPick: 'ဖျက်မည့်ပွဲ ရွေးပါ', sCancel: '{0} ဖျက်သည် {1}', allMenu: 'မီနူးအားလုံး', quickAdd: 'အမြန်ထပ်မှာ', repeat: 'ထပ်မှာ'});
Object.assign(I18N.lo, {sOrderC: '{0} ສັ່ງໃໝ່'});
Object.assign(I18N.lo, {closeTb: 'ປິດໂຕະ', voidItems: 'ຍົກເລີກລາຍການ', voidPick: 'ເລືອກລາຍການທີ່ຈະຍົກເລີກ', sCancel: '{0} ຍົກເລີກ {1}', allMenu: 'ເມນູທັງໝົດ', quickAdd: 'ສັ່ງເພີ່ມດ່ວນ', repeat: 'ສັ່ງຊ້ຳ'});
Object.assign(I18N.th, {added: 'เพิ่มลงตะกร้าแล้ว', yourCart: 'ตะกร้าของคุณ', confirmOrder: 'ยืนยันสั่งอาหาร', addMore: 'เลือกเมนูเพิ่ม', orderOk: 'ส่งออเดอร์แล้ว', orderOkSub: 'ร้านได้รับรายการแล้ว กำลังเตรียมอาหารให้ค่ะ', viewOrders: 'รายการที่สั่ง', viewCart: 'ดูตะกร้า', inCart: 'ในตะกร้า', results: 'ผลการค้นหา', needHelp: 'ต้องการความช่วยเหลือ', callStaffSub: 'ให้พนักงานมาที่โต๊ะ', billSub: 'พนักงานจะนำบิลมาให้', noOrders: 'ยังไม่ได้สั่งอาหาร', needPick: 'กรุณาเลือก'});
Object.assign(I18N.en, {added: 'Added to cart', yourCart: 'Your cart', confirmOrder: 'Place order', addMore: 'Add more items', orderOk: 'Order sent', orderOkSub: 'The kitchen has your order and is preparing it.', viewOrders: 'My orders', viewCart: 'View cart', inCart: 'in cart', results: 'Results', needHelp: 'Need help?', callStaffSub: 'A staff member will come to your table', billSub: 'Staff will bring your bill', noOrders: 'No orders yet', needPick: 'Please choose'});
Object.assign(I18N.zh, {added: '已加入购物车', yourCart: '购物车', confirmOrder: '确认下单', addMore: '继续点餐', orderOk: '已下单', orderOkSub: '厨房已收到您的订单', viewOrders: '我的订单', viewCart: '查看购物车', inCart: '已加入', results: '搜索结果', needHelp: '需要帮助？', callStaffSub: '服务员会到您的桌前', billSub: '服务员会送来账单', noOrders: '还没有点餐', needPick: '请选择'});
Object.assign(I18N.zh, {sOrderC: '{0} 新订单'});
Object.assign(I18N.my, {yourCart: 'ခြင်းတောင်း', confirmOrder: 'မှာမည်', viewOrders: 'မှာထားသည်', viewCart: 'ခြင်းကြည့်'});
Object.assign(I18N.lo, {yourCart: 'ກະຕ່າຂອງທ່ານ', confirmOrder: 'ຢືນຢັນສັ່ງ', addMore: 'ເລືອກເມນູເພີ່ມ', orderOk: 'ສົ່ງອໍເດີແລ້ວ', viewOrders: 'ລາຍການທີ່ສັ່ງ', viewCart: 'ເບິ່ງກະຕ່າ'});
I18N.th.dash = 'ภาพรวม'; I18N.en.dash = 'Overview'; I18N.my.dash = 'အနှစ်ချုပ်'; I18N.lo.dash = 'ພາບລວມ';
const TA = 'กลับบ้าน';
let UL = 'th', FB = false, M = null, store = null;
const fmt = (s, a) => s.replace(/\{(\d)\}/g, (_, i) => a[i] ?? '');
const TL = (k, l) => (I18N[l] && I18N[l][k]) || (l !== 'th' && I18N.en[k]) || I18N.th[k] || k;
const tx = (k, ...a) => fmt(TL(k, UL), a);
function trL(x, l) { if (x === TA) return TL('takeaway', l); const rx = /^(.*) x(\d+)$/.exec(x); if (rx) return trL(rx[1], l) + ' x' + rx[2]; const ci = x.indexOf(': '); if (ci > 0 && M && !(M.dict || {})[x]) return trL(x.slice(0, ci), l) + ': ' + trL(x.slice(ci + 2), l); if (l === 'th' || !M) return x; const d = (M.dict || {})[x] || {}; return d[l] || (FB && d.en) || x; }
const tr = x => trL(x, UL);
const sub = x => UL !== 'th' && tr(x) !== x ? `<small class="mu th">${esc(x)}</small>` : '';
const tNameL = (tb, l) => tb === 't0' ? TL('takeaway', l) : TL('table', l) + ' ' + tb.slice(1);
const tName = tb => tNameL(tb, UL);

/* ===================== helpers ===================== */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
const baht = n => '฿' + (Math.round(n * 100) / 100).toLocaleString('en-US');
const uid = () => Date.now().toString(36).padStart(9, '0') + Math.random().toString(36).slice(2, 7);
const clone = o => JSON.parse(JSON.stringify(o));
const dayKey = t => { const d = new Date(t); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
const hm = t => new Date(t).toLocaleTimeString('th-TH', {hour: '2-digit', minute: '2-digit'});
const sum = items => (items || []).reduce((s, i) => s + i.price * i.qty, 0);
const Q = new URLSearchParams(location.search), OWN = window.MODE === 'owner', BASE = location.origin + location.pathname.replace(/[^/]*$/, '');
function toast(m) { const t = document.createElement('div'); t.className = 'toast'; t.textContent = m; document.body.appendChild(t); setTimeout(() => t.remove(), 2500); }
function modal(html, wide) { $('#modal').innerHTML = html ? `<div class="modal" onclick="if(event.target===this)modal()"><div class="sheet ${wide ? 'w' : ''}">${html}</div></div>` : ''; }
function qrSvg(text, cell) { if (typeof qrcode !== 'function') return ''; const q = qrcode(0, 'M'); q.addData(text); q.make(); return q.createSvgTag({cellSize: cell || 5, margin: 8, scalable: true}); }
function beep() { try { const a = new (window.AudioContext || window.webkitAudioContext)(), o = a.createOscillator(), g = a.createGain(); o.connect(g); g.connect(a.destination); o.frequency.value = 880; g.gain.value = .15; o.start(); o.stop(a.currentTime + .2); } catch (e) {} }
function promptpay(id, amount) {
  id = String(id || '').replace(/\D/g, ''); if (!id) return '';
  const f = (k, v) => k + String(v.length).padStart(2, '0') + v;
  const acc = id.length >= 13 ? f('02', id) : f('01', '0066' + id.replace(/^0/, ''));
  let p = f('00', '01') + f('01', amount ? '12' : '11') + f('29', f('00', 'A000000677010111') + acc) + f('53', '764') + (amount ? f('54', amount.toFixed(2)) : '') + f('58', 'TH') + '6304';
  let crc = 0xFFFF;
  for (let i = 0; i < p.length; i++) { crc ^= p.charCodeAt(i) << 8; for (let j = 0; j < 8; j++) crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) & 0xFFFF : (crc << 1) & 0xFFFF; }
  return p + crc.toString(16).toUpperCase().padStart(4, '0');
}

/* ===================== เสียงพูด ===================== */
const hasTTS = 'speechSynthesis' in window;
const voiceFor = l => hasTTS ? speechSynthesis.getVoices().find(v => v.lang.replace('_', '-').toLowerCase().startsWith(l)) : null;
function speakLang(want) { if (!hasTTS) return want; return speechSynthesis.getVoices().length && !voiceFor(want) ? 'th' : want; }
function speak(text, l) { if (!hasTTS || !text) return; const u = new SpeechSynthesisUtterance(text); u.lang = LANGS[l][1]; const v = voiceFor(l); if (v) u.voice = v; speechSynthesis.speak(u); }
if (hasTTS) { speechSynthesis.getVoices(); document.addEventListener('click', () => { try { speechSynthesis.speak(new SpeechSynthesisUtterance('')); } catch (e) {} }, {once: true}); }

/* ===================== ที่เก็บข้อมูลกลาง =====================
   ไม่ใส่ Firebase URL = เก็บในเครื่องนี้ (localStorage)
   ใส่ Firebase Realtime Database URL = ทุกเครื่อง (พนักงาน + ลูกค้า) เห็นข้อมูลชุดเดียวกัน */
function makeStore(db) {
  db = (db || '').trim().replace(/\/+$/, '');
  if (db) {
    const u = p => db + '/rjpos/' + p.split('/').map(encodeURIComponent).join('/') + '.json';
    const j = async (p, o) => { const r = await fetch(u(p), o); if (!r.ok) throw new Error('sync ' + r.status); return r.json(); };
    return {live: true, since: async (p, k) => { const r = await fetch(u(p) + '?orderBy=%22%24key%22&startAt=%22' + encodeURIComponent(k) + '%22'); if (!r.ok) throw new Error('sync ' + r.status); return r.json(); }, get: p => j(p), put: (p, v) => j(p, {method: 'PUT', body: JSON.stringify(v)}), del: p => j(p, {method: 'DELETE'})};
  }
  const K = 'rjr_tree', rd = () => { try { return JSON.parse(localStorage.getItem(K)) || {}; } catch (e) { return {}; } };
  const walk = (o, ps, mk) => { for (const p of ps) { if (o[p] == null || typeof o[p] !== 'object') { if (!mk) return null; o[p] = {}; } o = o[p]; } return o; };
  return {live: false, async since(p, k) { return this.get(p); },
    async get(p) { const ps = p.split('/'), o = walk(rd(), ps.slice(0, -1)); return o ? o[ps.at(-1)] ?? null : null; },
    async put(p, v) { const t = rd(), ps = p.split('/'); walk(t, ps.slice(0, -1), 1)[ps.at(-1)] = v; localStorage.setItem(K, JSON.stringify(t)); },
    async del(p) { const t = rd(), ps = p.split('/'), o = walk(t, ps.slice(0, -1)); if (o) { delete o[ps.at(-1)]; localStorage.setItem(K, JSON.stringify(t)); } }};
}
function normM(m) {
  m.cats = m.cats || []; m.groups = (m.groups || []).map(g => ({...g, choices: g.choices || []})); m.menu = (m.menu || []).map(x => ({...x, opts: x.opts || []}));
  m.dict = m.dict || {}; m.clangs = m.clangs && m.clangs.length ? m.clangs : ['th', 'en', 'zh']; m.slangs = m.slangs && m.slangs.length ? m.slangs : ['th', 'my', 'lo', 'en'];
  m.tables = Number(m.tables) || 12; m.cdef = m.clangs.includes(m.cdef) ? m.cdef : 'th'; m.channels = m.channels || ['Grab', 'LINE MAN', 'ShopeeFood']; return m;
}
function normT(ts) { const o = {}; Object.keys(ts || {}).forEach(k => { const t = ts[k] || {}, it = {}; Object.keys(t.items || {}).forEach(i => { const x = t.items[i]; if (x && x.name) it[i] = {...x, opts: x.opts || [], note: x.note || ''}; }); if (Object.keys(it).length || t.call) o[k] = {openedAt: t.openedAt || Date.now(), call: t.call || '', items: it}; }); return o; }

/* ===================== เมนู (ใช้ร่วมกันทั้งลูกค้าและพนักงาน) ===================== */
function unitPrice(id, opts) {
  const m = M.menu.find(x => x.id === id); if (!m) return null; let p = Number(m.price) || 0;
  m.opts.forEach(gid => { const g = M.groups.find(x => x.id === gid); if (g) g.choices.forEach(c => { if ((opts || []).includes(c.name)) p += Number(c.price) || 0; }); });
  return p;
}
/* หมายเหตุ: เก็บข้อความต้นฉบับไว้เสมอ แล้วต่อท้ายคำแปลเป็นภาษาของเครื่องที่กำลังดู เช่น  no sugar - ไม่ใส่น้ำตาล */
const NTC = {}, NTB = {}, GL = {zh: 'zh-CN'};
function noteL(x, l) { if (!x.note) return ''; if (FB) return x.note; const out = [x.note]; [l, 'th'].forEach(g => { const t = (x.nt || {})[g] ?? NTC[x.note + '|' + g]; if (t && t !== '=' && !out.some(o => o.toLowerCase() === t.toLowerCase())) out.push(t); }); return out.join(' - '); }
/* ชื่อ/ตัวเลือกบนเครื่องพนักงาน: ภาษาของเครื่อง + ภาษาไทยกำกับเสมอ */
const bi = o => { const t = tr(o); return !FB && t !== o ? t + ' (' + o + ')' : t; };
const noteS = x => noteL(x, UL);
/* API key ของ Google Cloud Translation เก็บแยกที่ cfg/mtKey (ไม่อยู่ในเมนู ลูกค้าที่สแกน QR จึงไม่ได้รับ key ไปด้วย) */
let MTK = '', MTKV = null, MTERR = '';
async function loadMtKey() { if (M.mtKey) { MTK = M.mtKey; delete M.mtKey; M.mtKv = Date.now(); W(store.put('cfg/mtKey', MTK)); saveM(); }
  if (MTKV === (M.mtKv || 0)) return; try { MTK = (await store.get('cfg/mtKey')) || ''; MTKV = M.mtKv || 0; } catch (e) {} }
async function mtTest() { const k = $('#sMtK').value.trim(), old = MTK; MTK = k; MTERR = ''; Object.keys(NTC).forEach(x => delete NTC[x]); $('#mtRes').textContent = '…';
  const r = await mt('no bean sprouts, less spicy', 'th'); $('#mtRes').textContent = r && r !== '=' ? (k && !MTERR ? '✔ ใช้ API key ได้: ' : (k ? '✕ key ใช้ไม่ได้ (' + MTERR + ') — ใช้แบบฟรีแทน: ' : 'แบบฟรี: ')) + 'no bean sprouts, less spicy → ' + r : '✕ แปลไม่ได้ ' + MTERR; MTK = old; }
async function mt(text, to) {
  const key = text + '|' + to; if (NTC[key] != null) return NTC[key];
  const d = (M.dict[text] || {})[to]; if (d) return NTC[key] = d;
  if (M.mt === 'off') return null;
  try { let out;
    if (MTK) { try { const j = await (await fetch('https://translation.googleapis.com/language/translate/v2?key=' + encodeURIComponent(MTK), {method: 'POST', body: JSON.stringify({q: text, target: GL[to] || to, format: 'text'})})).json();
        if (j.error) throw new Error(j.error.message); out = j.data.translations[0].translatedText; MTERR = ''; }
      catch (e) { if (MTERR !== e.message) { MTERR = e.message; toast('Google Translate API: ' + e.message); } } }
    if (out == null) { const r = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=' + (GL[to] || to) + '&dt=t&q=' + encodeURIComponent(text)); out = (await r.json())[0].map(a => a[0]).join(''); }
    out = String(out || '').trim(); return NTC[key] = !out || out.toLowerCase() === text.toLowerCase() ? '=' : out;
  } catch (e) { return null; }
}
const optLine = x => [...(x.opts || []).map(bi), noteS(x)].filter(Boolean).join(', ');
let PK = null;
function pickItem(id, cb) {
  const m = M.menu.find(x => x.id === id); if (!m || m.out || !inTime(m)) return; PK = {m, cb, qty: 1};
  const gs = m.opts.map(g => M.groups.find(x => x.id === g)).filter(Boolean);
  if (m.imgL) bigImg(m).then(u => { if (u && PK && PK.m === m && $('#pkImg')) $('#pkImg').src = u; });
 modal(`<button class="cx-x pk-x" onclick="modal()" aria-label="close">${IC.x}</button>${m.img ? `<img id="pkImg" src="${m.img}" alt="" style="width:100%;aspect-ratio:4/3;max-height:340px;object-fit:cover;border-radius:14px;margin-bottom:8px;background:#eee">` : ''}<h2>${esc(tr(m.name))}</h2>${sub(m.name)}<div class="mu">${baht(m.price)}</div>
  ${gs.map(g => `<h3 class="mt pkg" id="pg_${g.id}">${esc(tr(g.name))} <small class="mu">${g.multi ? tx('pickMany') + (g.max ? ' ≤ ' + g.max : '') : tx('pick1')}</small>${g.required ? `<span class="req">${tx('req')}</span>` : ''}</h3>
    ${g.choices.map((c, i) => { if (c.out) return ''; const v = esc(g.pre ? g.name + ': ' + c.name : c.name), pr = `<b class="mu">${c.price ? '+' + c.price : ''}</b>`;
      return g.multi && g.rep ? `<div class="ck" style="display:flex;align-items:center;gap:10px;padding:6px 2px;border-bottom:1px solid #f3f4f6"><span style="flex:1">${esc(bi(c.name))}</span>${pr}<div class="qty"><button onclick="pkRep('${g.id}',${i},-1)">−</button><b class="rp" data-g="${g.id}" data-p="${Number(c.price) || 0}" data-v="${v}" id="rp_${g.id}_${i}" style="min-width:22px;text-align:center">0</b><button onclick="pkRep('${g.id}',${i},1)">+</button></div></div>`
        : `<label class="ck"><input type="${g.multi ? 'checkbox' : 'radio'}" name="g_${g.id}" data-p="${Number(c.price) || 0}" value="${v}" onchange="pkChk(this,'${g.id}')"><span>${esc(bi(c.name))}</span>${pr}</label>`; }).join('')}`).join('')}
  ${gs.some(g => g.choices.some(c => c.name === TA)) ? '' : `<label class="ck mt"><input type="checkbox" id="pkTA"><span>${FB ? '' : I('bag', 16) + ' '}${tx('takeaway')}</span></label>`}<label>${tx('note')}</label><input id="pkNote">
  ${FB ? '' : `<div class="row mt">${[2, 3, 5, 10].map(n => `<button class="sm" onclick="PK.qty=${n};pkUpd()">×${n}</button>`).join('')}</div>`}<div class="pk-foot"><div class="cx-step"><button onclick="pkQty(-1)">${IC.minus}</button><b id="pkQ">1</b><button onclick="pkQty(1)">${IC.plus}</button></div><button class="cx-cta" id="pkOk" onclick="pkDone()"></button></div>`);
  pkUpd();
}
const pkReps = gid => [...document.querySelectorAll('#modal .rp')].filter(e => (!gid || e.dataset.g === gid) && +e.textContent > 0);
const pkCount = gid => document.querySelectorAll('#modal input[name="g_' + gid + '"]:checked').length + pkReps(gid).reduce((a, e) => a + +e.textContent, 0);
function pkRep(gid, i, d) { const g = M.groups.find(x => x.id === gid), e = $('#rp_' + gid + '_' + i), n = Math.max(0, +e.textContent + d); if (d > 0 && g.max && pkCount(gid) >= g.max) return toast(tx('pickMany') + ' ≤ ' + g.max); e.textContent = n; pkUpd(); }
function pkChk(el, gid) { const g = M.groups.find(x => x.id === gid); if (g.multi && g.max && el.checked && pkCount(gid) > g.max) { el.checked = false; toast(tx('pickMany') + ' ≤ ' + g.max); } pkUpd(); }
function pkOpts() { const out = []; PK.m.opts.forEach(gid => { document.querySelectorAll('#modal input[name="g_' + gid + '"]:checked').forEach(e => out.push(e.value)); pkReps(gid).forEach(e => out.push(e.dataset.v + (+e.textContent > 1 ? ' x' + e.textContent : ''))); }); return out; }
function pkPrice() { return (Number(PK.m.price) || 0) + [...document.querySelectorAll('#modal input[name^=g_]:checked')].reduce((a, e) => a + (+e.dataset.p || 0), 0) + pkReps().reduce((a, e) => a + (+e.dataset.p || 0) * +e.textContent, 0); }
function pkUpd() { $('#pkOk').textContent = tx('add') + ' ' + baht(pkPrice() * PK.qty); $('#pkQ').textContent = PK.qty; }
function pkQty(d) { PK.qty = Math.max(1, PK.qty + d); pkUpd(); }
function pkDone() {
  const o = pkOpts(); if ($('#pkTA') && $('#pkTA').checked) o.push(TA);
  for (const gid of PK.m.opts) { const g = M.groups.find(x => x.id === gid); if (g && g.required && !pkCount(g.id)) { const h = $('#pg_' + g.id); if (h) { h.classList.remove('need'); void h.offsetWidth; h.classList.add('need'); h.scrollIntoView({behavior: 'smooth', block: 'center'}); } return toast(tx('needPick') + ' ' + tr(g.name)); } }
  const k = PK, m = k.m; const line = {id: m.id, name: m.name, cat: m.cat, price: pkPrice(), qty: k.qty, opts: o, note: $('#pkNote').value.trim().slice(0, 100)}; modal(); k.cb(line);
}
let MQ = '', MGC = '';
const thumb = id => { const m = M.menu.find(x => x.id === id); return m && m.img && !D.noImg ? `<img class="th64" src="${m.img}" alt="" loading="lazy">` : ''; };
const hhmm = () => new Date().toTimeString().slice(0, 5);
function inTime(m) { if (!m.t1 || !m.t2) return true; const n = hhmm(); return m.t1 <= m.t2 ? n >= m.t1 && n < m.t2 : n >= m.t1 || n < m.t2; }
const shown = m => !FB || (!m.hide && !(M.hcats || []).includes(m.cat));
function mgItems(cat, fn) { const q = MQ.trim().toLowerCase();
  const hot = cat === '*hot' ? hotIds() : [];
  const list = M.menu.filter(m => shown(m) && (!cat || (cat === '*rec' ? m.rec : cat === '*hot' ? hot.includes(m.id) : m.cat === cat)) && (!q || m.name.toLowerCase().includes(q) || tr(m.name).toLowerCase().includes(q) || String(m.price) === q));
  const cell = m => `<div class="item ${m.out || !inTime(m) ? 'out' : ''}" onclick="${fn}Pick('${m.id}')"><div>${m.img && !D.noImg ? `<img src="${m.img}" alt="" loading="lazy">` : ''}<div class="tx"><b>${m.rec ? '<i class="ist">' + I('star', 14) + '</i> ' : ''}${esc(tr(m.name))}</b>${sub(m.name)}</div></div><span class="pr">${m.out ? tx('out') : !inTime(m) ? m.t1 + '–' + m.t2 : baht(m.price)}</span></div>`;
  if (!list.length) return `<p class="mu">${tx('empty')}</p>`;
  /* หมวด "ทั้งหมด": แบ่งเป็นหัวข้อตามหมวด ลูกค้าเห็นว่าร้านขายอะไรบ้าง */
  if (!cat && !q) return [...M.cats, ...new Set(list.map(m => m.cat).filter(c => !M.cats.includes(c)))].map(c => { const ms = list.filter(m => m.cat === c); return ms.length ? `<h3 class="gh">${esc(tr(c))}<small class="mu"> ${ms.length}</small></h3>` + ms.map(cell).join('') : ''; }).join('');
  return list.map(cell).join(''); }
/* จำนวนช่องต่อแถว: เลือกเองได้ต่อเครื่อง ('' = อัตโนมัติตามขนาดจอ, '1' = แบบรายการ) */
const gCols = () => { try { return FB ? localStorage.getItem('rjc_cols') || '' : D.cols || ''; } catch (e) { return ''; } };
function setCols(v) { v = gCols() === v ? '' : v; if (FB) { try { localStorage.setItem('rjc_cols', v); } catch (e) {} document.querySelectorAll('.seg button').forEach(b => b.classList.toggle('on', b.dataset.c === v)); return cuList(); } if (FB) { try { localStorage.setItem('rjc_cols', v); } catch (e) {} } else { D.cols = v; saveD(); } const g = $('#mg'); if (g) { g.className = gridCls(); g.style.cssText = gridSty(); } document.querySelectorAll('.seg button').forEach(b => b.classList.toggle('on', b.dataset.c === v)); }
const gridCls = () => 'grid' + (gCols() === '1' ? ' lst' : '');
const gridSty = () => { const c = gCols(); return c && c !== '1' ? `grid-template-columns:repeat(${c},minmax(0,1fr))` : ''; };
const colSeg = () => `<div class="seg">${['1', '2', '3', '4', '5'].map(c => `<button data-c="${c}" class="${gCols() === c ? 'on' : ''}" title="${c === '1' ? tx('listV') : c + ' ' + tx('perRow')}" onclick="setCols('${c}')">${c === '1' ? IC.list : c}</button>`).join('')}</div>`;
function menuGrid(cat, fn) { MGC = cat;
  return `<div class="mgbar"><input type="search" placeholder="${tx('search')}" value="${esc(MQ)}" oninput="MQ=this.value;$('#mg').innerHTML=mgItems(MGC,'${fn}')">${colSeg()}</div>
  <div class="chips"><button class="${!cat ? 'on' : ''}" onclick="${fn}Cat(-1)">${tx('all')}</button>${hotIds().length ? `<button class="${cat === '*hot' ? 'on' : ''}" onclick="${fn}Cat(-3)">${I('flame', 15)} ${tx('hot')}</button>` : ''}${M.menu.some(m => m.rec) ? `<button class="${cat === '*rec' ? 'on' : ''}" onclick="${fn}Cat(-2)">${I('star', 15)} ${tx('rec')}</button>` : ''}${M.cats.map((c, i) => FB && (M.hcats || []).includes(c) ? '' : `<button class="${c === cat ? 'on' : ''}" onclick="${fn}Cat(${i})">${esc(tr(c))}</button>`).join('')}</div>
  <div class="${gridCls()}" id="mg" style="${gridSty()}">${mgItems(cat, fn)}</div>`;
}
const catAt = i => i === -2 ? '*rec' : i === -3 ? '*hot' : i < 0 ? '' : M.cats[i];
function hotIds() { if (typeof SALES === 'undefined' || !SALES.length) return []; const q = {}; SALES.forEach(s => s.items.forEach(i => q[i.name] = (q[i.name] || 0) + i.qty)); return Object.keys(q).sort((a, b) => q[b] - q[a]).slice(0, 12).map(n => (M.menu.find(m => m.name === n) || {}).id).filter(Boolean); }
function addLine(list, line) { const s = list.find(x => x.id === line.id && x.note === line.note && x.opts.join() === line.opts.join()); if (s) s.qty += line.qty; else list.push(line); }

/* ============================================================
   หน้าลูกค้า  (?t=เลขโต๊ะ)
   ============================================================ */
/* ไอคอนเส้น (SVG) ใช้แทนอิโมจิในหน้าลูกค้า */
const svg = (p, w) => `<svg class="svi" viewBox="0 0 24 24" width="${w || 20}" height="${w || 20}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
/* ไอคอนเส้นฝั่งพนักงาน */
const ICP = {
  printer: '<path d="M6 9V3h12v6"/><rect x="6" y="14" width="12" height="7" rx="1"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>',
  vol: '<path d="M11 5 6 9H2v6h4l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>',
  mute: '<path d="M11 5 6 9H2v6h4l5 4V5Z"/><path d="m22 9-6 6M16 9l6 6"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  chef: '<path d="M6 13.9A4 4 0 0 1 7.4 6a5.1 5.1 0 0 1 9.2 0A4 4 0 0 1 18 13.9V21H6Z"/><path d="M6 17h12"/>',
  serve: '<path d="M3 18h18M5 18a7 7 0 0 1 14 0M12 8V5M10 5h4"/>',
  cash: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 12h.01M18 12h.01"/>',
  chart: '<path d="M3 3v18h18"/><path d="M8 17v-5M13 17V8M18 17V9"/>',
  bill: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"/><path d="M9 8h6M9 12h6"/>',
  bowl: '<path d="M3 11h18a9 9 0 0 1-18 0Z"/><path d="M8 21h8M9 7c0-2 2-2 2-4M13 7c0-2 2-2 2-4"/>',
  alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3l-5.5 2.9 1-6.2L3 9.6l6.2-.9L12 3Z"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3a2.5 2.5 0 0 0 2.5 2.5Z"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM21 14v.01M14 21h.01M17 21h4v-4"/>',
  move: '<path d="M4 8h15l-4-4M20 16H5l4 4"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/>',
  img: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
  imgOff: '<path d="m2 2 20 20"/><path d="M10.4 3H19a2 2 0 0 1 2 2v8.6M21 19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5"/><path d="m3 17 5-5 4 4"/>',
  timer: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M10 2h4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  scissors: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/>',
  repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
  card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
  sliders: '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  trend: '<path d="m3 17 6-6 4 4 8-8"/><path d="M14 7h7v7"/>',
  archive: '<rect x="3" y="4" width="18" height="4" rx="1"/><path d="M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8M10 12h4"/>',
  cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  store: '<path d="M3 9l1.5-5h15L21 9"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M5 12v8h14v-8M10 20v-5h4v5"/>',
  db: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  down: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>', up: '<path d="M12 15V3M7 8l5-5 5 5M5 21h14"/>',
  ban: '<circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/>',
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>',
  refresh: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
  arUp: '<path d="M12 19V5M5 12l7-7 7 7"/>', arDown: '<path d="M12 5v14M19 12l-7 7-7-7"/>', arTop: '<path d="M5 4h14M12 20V9M6 15l6-6 6 6"/>',
  check: '<path d="m5 12 5 5L20 7"/>', x: '<path d="M18 6 6 18M6 6l12 12"/>', plus: '<path d="M12 5v14M5 12h14"/>',
  bag: '<path d="M6 7h12l-1 13H7L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/>',
  bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4l2-2Z"/><path d="M10 21h4"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
};
function I(n, w) { w = w || 18; return `<svg class="svi si" viewBox="0 0 24 24" width="${w}" height="${w}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICP[n]}</svg>`; }
const IC = {
  search: svg('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
  globe: svg('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>', 16),
  plus: svg('<path d="M12 5v14M5 12h14"/>', 18), minus: svg('<path d="M5 12h14"/>', 18),
  bag: svg('<path d="M6 7h12l-1 13H7L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/>'),
  bell: svg('<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4l2-2Z"/><path d="M10 21h4"/>'),
  list: svg('<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>', 18),
  check: svg('<path d="m5 12 5 5L20 7"/>', 40), x: svg('<path d="M18 6 6 18M6 6l12 12"/>'),
  bill: svg('<path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"/><path d="M9 8h6M9 12h6"/>'),
};
const C = {cat: '', cart: [], mine: null, err: '', T: '', q: ''};
function cuSave() { try { sessionStorage.setItem('rjc_cart_' + C.T, JSON.stringify(C.cart)); } catch (e) {} }
function cuCat(i) { C.cat = catAt(i); cuDraw(); }
function cuPick(id) { pickItem(id, line => { addLine(C.cart, line); cuSave(); cuRefresh(); toast(tx('added')); }); }
/* เมนูที่ไม่มีตัวเลือก: กด + ใส่ตะกร้าทันที ไม่ต้องเปิดหน้าต่าง */
function cuQuick(id) { const m = M.menu.find(x => x.id === id); if (!m || m.out || !inTime(m)) return; if (m.opts.length) return cuPick(id);
  addLine(C.cart, {id, name: m.name, cat: m.cat, price: Number(m.price), qty: 1, opts: [], note: ''}); cuSave(); cuRefresh(); }
function cuAdj(id, d) { const l = [...C.cart].reverse().find(x => x.id === id && !x.opts.length && !x.note) || [...C.cart].reverse().find(x => x.id === id); if (!l) return; l.qty += d; if (l.qty <= 0) C.cart.splice(C.cart.indexOf(l), 1); cuSave(); cuRefresh(); }
const cuCnt = id => C.cart.filter(x => x.id === id).reduce((a, x) => a + x.qty, 0);
function cuQty(i, d) { C.cart[i].qty += d; if (C.cart[i].qty <= 0) C.cart.splice(i, 1); cuSave(); cuRefresh(); C.cart.length ? cuCart() : modal(); }
const shHead = t => `<div class="cx-sh"><h2>${t}</h2><button class="cx-x" onclick="modal()" aria-label="close">${IC.x}</button></div>`;
function cuCart() { modal(`${shHead(tx('yourCart'))}<div class="mu" style="margin:-6px 0 6px">${esc(tName(C.T))}</div>
  ${C.cart.map((x, i) => `<div class="cx-ln">${thumb(x.id)}<div class="n"><b>${esc(tr(x.name))}</b>${optLine(x) ? `<small class="mu th">${esc(optLine(x))}</small>` : ''}<span class="pr">${baht(x.price * x.qty)}</span></div><div class="cx-step"><button onclick="cuQty(${i},-1)">${IC.minus}</button><b>${x.qty}</b><button onclick="cuQty(${i},1)">${IC.plus}</button></div></div>`).join('')}
  <div class="tot"><span>${tx('total')}</span><span>${baht(sum(C.cart))}</span></div>
  <button class="cx-cta" id="cuSend" onclick="cuSend()">${tx('confirmOrder')} · ${baht(sum(C.cart))}</button><button class="cx-sec" onclick="modal()">${tx('addMore')}</button>`); }
async function cuSend() {
  $('#cuSend').disabled = true; const now = Date.now(), base = 'live/tables/' + C.T;
  try {
    if (!(await store.get(base + '/openedAt'))) await store.put(base + '/openedAt', now);
    for (const x of C.cart) await store.put(base + '/items/i' + uid(), {...x, status: 'new', src: 'qr', by: '', at: now});
    await store.put('live/events/e' + uid(), {type: 'order', t: C.T, at: now, dev: 'cust', by: '', n: C.cart.length, items: C.cart.map(x => ({name: x.name, qty: x.qty, cat: x.cat}))});
    C.cart = []; cuSave(); cuRefresh(); cuPull();
    modal(`<div class="cx-ok"><div class="ok">${IC.check}</div><h2>${tx('orderOk')}</h2><p class="mu">${tx('orderOkSub')}</p></div><button class="cx-cta" onclick="modal()">${tx('addMore')}</button><button class="cx-sec" onclick="cuMine()">${tx('viewOrders')}</button>`);
  } catch (e) { $('#cuSend').disabled = false; toast(tx('fail')); }
}
async function cuCall(kind) { try { await store.put('live/tables/' + C.T + '/call', kind); await store.put('live/events/e' + uid(), {type: 'call', call: kind, t: C.T, at: Date.now(), dev: 'cust', by: ''}); modal(); toast(tx('called')); } catch (e) { toast(tx('fail')); } }
function cuHelp() { modal(`${shHead(tx('needHelp'))}<button class="cx-opt" onclick="cuCall('staff')">${IC.bell}<span><b>${tx('callStaff')}</b><small class="mu">${tx('callStaffSub')}</small></span></button><button class="cx-opt" onclick="cuCall('bill')">${IC.bill}<span><b>${tx('bill')}</b><small class="mu">${tx('billSub')}</small></span></button>`); }
function cuMine() { const it = Object.values((C.mine || {}).items || {}).sort((a, b) => a.at - b.at); const sk = {new: 'stNew', cooked: 'stCooked', served: 'stServed'};
  modal(`${shHead(tx('viewOrders'))}${it.map(x => `<div class="cx-ln">${thumb(x.id)}<div class="n"><b>${x.qty} × ${esc(tr(x.name))}</b>${optLine(x) ? `<small class="mu th">${esc(optLine(x))}</small>` : ''}<span class="pr">${baht(x.price * x.qty)}</span></div><span class="st ${x.status}">${tx(sk[x.status] || 'stNew')}</span></div>`).join('') || `<p class="mu c" style="padding:24px 0">${tx('noOrders')}</p>`}
  ${it.length ? `<div class="tot"><span>${tx('total')}</span><span>${baht(sum(it))}</span></div>` : ''}<div class="row mt"><button class="cx-sec" style="margin:0" onclick="cuCall('staff')">${tx('callStaff')}</button><button class="cx-cta" style="margin:0" onclick="cuCall('bill')">${tx('bill')}</button></div>`); }
function cuLang() { modal(`${shHead(tx('lang'))}${M.clangs.map(l => `<button class="cx-opt ${l === UL ? 'on' : ''}" onclick="cuSetLang('${l}')"><span><b>${LANGS[l][0]}</b></span>${l === UL ? svg('<path d="m5 12 5 5L20 7"/>') : ''}</button>`).join('')}`); }
function cuSetLang(l) { UL = l; try { localStorage.setItem('rjc_lang', l); } catch (e) {} document.documentElement.lang = l; modal(); cuDraw(); }
/* หมวดของหน้าลูกค้า: แนะนำ (ถ้ามี) + หมวดที่มีเมนูให้ลูกค้าเห็น */
function cuSecs() { const vis = M.menu.filter(shown), out = []; if (vis.some(m => m.rec)) out.push([tx('rec'), vis.filter(m => m.rec)]);
  M.cats.forEach(c => { const ms = vis.filter(m => m.cat === c); if (ms.length) out.push([tr(c), ms]); }); return out; }
function cuCard(m) { const cnt = cuCnt(m.id), off = m.out || !inTime(m), simple = !m.opts.length;
  const ctl = off ? '' : simple && cnt ? `<div class="cx-step" onclick="event.stopPropagation()"><button onclick="cuAdj('${m.id}',-1)" aria-label="-">${IC.minus}</button><b>${cnt}</b><button onclick="cuAdj('${m.id}',1)" aria-label="+">${IC.plus}</button></div>` : `<button class="cx-add" onclick="event.stopPropagation();cuQuick('${m.id}')" aria-label="+">${IC.plus}</button>`;
  return `<div class="cx-it ${off ? 'off' : ''} ${cnt ? 'in' : ''}" onclick="cuPick('${m.id}')">${m.img && !D.noImg ? `<div class="ph"><img src="${m.img}" alt="" loading="lazy">${cnt && !simple ? `<i>${cnt}</i>` : ''}</div>` : ''}
    <div class="bd"><div class="nm">${esc(tr(m.name))}</div>${sub(m.name)}${cnt && !simple && !(m.img && !D.noImg) ? `<small class="incart">${cnt} ${tx('inCart')}</small>` : ''}<div class="ft"><span class="pr">${m.out ? tx('out') : !inTime(m) ? m.t1 + '–' + m.t2 : baht(m.price)}</span>${ctl}</div></div></div>`; }
function cuList() { const el = $('#cxMain'); if (!el) return; const q = C.q.trim().toLowerCase(), cls = gCols() === '1' ? 'cx-grid lst' : 'cx-grid', sty = gridSty();
  if (q) { const r = M.menu.filter(m => shown(m) && (m.name.toLowerCase().includes(q) || tr(m.name).toLowerCase().includes(q) || String(m.price) === q));
    el.innerHTML = `<h3 class="cx-h">${tx('results')} <small class="mu">${r.length}</small></h3>` + (r.length ? `<div class="${cls}" style="${sty}">${r.map(cuCard).join('')}</div>` : `<p class="mu c" style="padding:30px 0">${tx('empty')}</p>`); return; }
  el.innerHTML = cuSecs().map(([n, ms], i) => `<section id="cs${i}" class="cx-sec-b"><h3 class="cx-h">${esc(n)} <small class="mu">${ms.length}</small></h3><div class="${cls}" style="${sty}">${ms.map(cuCard).join('')}</div></section>`).join(''); }
function cuBar() { const el = $('#cxBar'); if (!el) return; const n = C.cart.reduce((s, x) => s + x.qty, 0), mn = Object.keys((C.mine || {}).items || {}).length;
  el.innerHTML = n ? `<button class="cx-mini" onclick="cuMine()" aria-label="orders">${IC.bill}${mn ? `<i>${mn}</i>` : ''}</button><button class="cx-cart" onclick="cuCart()"><span class="b">${n}</span><span>${tx('viewCart')}</span><b>${baht(sum(C.cart))}</b></button>`
    : `<button class="cx-sec2" onclick="cuMine()">${IC.bill}<span>${tx('viewOrders')}${mn ? ` (${mn})` : ''}</span></button><button class="cx-sec2" onclick="cuHelp()">${IC.bell}<span>${tx('callStaff')}</span></button>`; }
function cuRefresh() { cuList(); cuBar(); }
function cuGo(i) { if (C.q) { C.q = ''; $('#cxQ').value = ''; cuList(); } const s = $('#cs' + i), h = $('.cx-stick'); if (!s) return; CSPY = i; cuSpyMark(i);
  window.scrollTo({top: s.getBoundingClientRect().top + scrollY - h.getBoundingClientRect().bottom + 2, behavior: 'smooth'}); setTimeout(() => CSPY = -1, 700); }
let CSPY = -1;
function cuSpyMark(i) { const nav = $('#cxCats'); if (!nav) return; nav.querySelectorAll('button').forEach((b, k) => b.classList.toggle('on', k === i)); const b = nav.children[i]; if (b) nav.scrollTo({left: b.offsetLeft - 12, behavior: 'smooth'}); }
function cuSpy() { if (CSPY >= 0 || C.q || !$('.cx-stick')) return; const top = $('.cx-stick').getBoundingClientRect().bottom + 8; let cur = 0; document.querySelectorAll('.cx-sec-b').forEach((s, i) => { if (s.getBoundingClientRect().top <= top) cur = i; }); if (cur !== C.sec) { C.sec = cur; cuSpyMark(cur); } }
function cuSearch(v) { C.q = v; $('#cxClr').style.display = v ? '' : 'none'; cuList(); if (!v) cuSpy(); }
function cuDraw() {
  if (!M) { $('#app').innerHTML = `<div class="cx-empty"><div class="mu">${C.err || tx('loading')}</div></div>`; return; }
  C.sec = 0;
  $('#app').innerHTML = `<div class="cx-stick"><header class="cx-top"><div class="t"><b>${esc(M.shop)}</b><span>${esc(tName(C.T))}</span></div>${M.clangs.length > 1 ? `<button class="cx-lang" onclick="cuLang()">${IC.globe}<span>${LANGS[UL][0]}</span></button>` : ''}</header>
    <div class="cx-tools"><label class="cx-q">${IC.search}<input id="cxQ" type="search" enterkeyhint="search" placeholder="${tx('search')}" value="${esc(C.q)}" oninput="cuSearch(this.value)"><button id="cxClr" type="button" style="${C.q ? '' : 'display:none'}" onclick="$('#cxQ').value='';cuSearch('')" aria-label="clear">${IC.x}</button></label>${colSeg()}</div>
    <nav class="cx-cats" id="cxCats">${cuSecs().map(([n], i) => `<button class="${i ? '' : 'on'}" onclick="cuGo(${i})">${esc(n)}</button>`).join('')}</nav></div>
    <main class="cx-main" id="cxMain"></main><div class="cx-bar" id="cxBar"></div>`;
  cuRefresh();
}
let cuMv = 0;
async function cuPull() {
  try {
    const mv = await store.get('live/mv');
    if (M && M.qrOpen === false) { M = null; C.err = tx('closed'); }
    if (!M || mv !== cuMv) { const raw = await store.get('menu'); if (raw) { M = normM(JSON.parse(raw)); cuMv = mv; if (M.qrOpen === false) { M = null; C.err = tx('closed'); cuMv = 0; cuDraw(); return; } if (!localStorage.getItem('rjc_lang') || !M.clangs.includes(UL)) UL = M.cdef; if (!$('#modal').innerHTML) cuDraw(); } else C.err = tx('closed'); }
    if (M && (C.T !== 't0' && !(+C.T.slice(1) >= 1 && +C.T.slice(1) <= M.tables))) { M = null; C.err = tx('closed'); }
    const m = normT({x: await store.get('live/tables/' + C.T)}).x || null; if (JSON.stringify(m) !== JSON.stringify(C.mine)) { C.mine = m; cuBar(); }
  } catch (e) { if (!M) C.err = tx('fail'); }
  if (!M) cuDraw();
}
function custInit() {
  C.T = 't' + (parseInt(Q.get('t')) || 0); FB = true; UL = localStorage.getItem('rjc_lang') || 'th'; if (!LANGS[UL]) UL = 'th';
  store = makeStore(Q.get('db')); try { C.cart = JSON.parse(sessionStorage.getItem('rjc_cart_' + C.T)) || []; } catch (e) {}
  cuDraw(); cuPull(); setInterval(cuPull, 5000); window.addEventListener('scroll', () => requestAnimationFrame(cuSpy), {passive: true});
}

/* ============================================================
   หน้าพนักงาน
   ============================================================ */
/* เมนูตั้งต้นของร้าน — แถว: [หมวด, ชื่อไทย, ราคา, ชื่อพม่า, ชื่ออังกฤษ, กลุ่มตัวเลือก] */
const SEED_MENU = [
  ['ก๋วยเตี๋ยว', 'ก๋วยเตี๋ยวชาม 25', 25, 'ကွေ့တီယို ချမ် 25 +', 'Boat noodles, small bowl (25)', ['line']],
  ['ก๋วยเตี๋ยว', 'ก๋วยเตี๋ยวเรือชาม 40', 40, 'ကွေ့တီယို ချမ် 40 ++', 'Boat noodles, large bowl (40)', ['line']],
  ['ก๋วยเตี๋ยว', 'เกาเหลา', 40, 'ကောက်လော် - ခေါက်ဆွဲမပါ', 'Soup without noodles', []],
  ['ก๋วยเตี๋ยว', 'ก๋วยเตี๋ยวเป็ดย่าง', 50, 'ကွေ့တီယိုပက်ယန်', 'Roast duck noodles', ['line']],
  ['ก๋วยเตี๋ยว', 'ก๋วยเตี๋ยว (กลับบ้าน)', 55, 'တီယော်ကလပ်ဘန်', 'Noodles (takeaway)', ['line']],
  ['ก๋วยเตี๋ยว', 'ลูกชิ้นลวก', 25, 'လုတ်ချင်လွတ်', 'Boiled meatballs', []],
  ['ก๋วยเตี๋ยว', 'เนื้อลวก', 55, 'အသားပြုတ်', 'Boiled beef', []],
  ['ก๋วยเตี๋ยว', 'เส้นลวก', 10, 'ဆိန်လွတ် - ခေါက်ဆွဲပြုတ်', 'Extra boiled noodles', ['line']],
  ['ก๋วยเตี๋ยว', 'ผักบุ้งลวก', 10, 'ဖက်ဘုန်းလွတ်', 'Boiled morning glory', []],
  ['ก๋วยเตี๋ยว', 'เตี๋ยวกลับบ้าน +', 55, 'တီယော်ကလပ်ဘန် +', 'Takeaway noodles (regular)', ['line']],
  ['ก๋วยเตี๋ยว', 'เตี๋ยวกลับบ้าน ++', 65, 'တီယော်ကလပ်ဘန် ++', 'Takeaway noodles (large)', ['line']],
  ['ก๋วยเตี๋ยว', 'หม้อไฟรสจนา', 129, 'ကောက်လော်အိုးကြီး', 'Rosjana hot pot', []],
  ['เป็ดย่าง', 'ข้าวหน้าเป็ด', 50, 'ခေါက်နပေ', 'Roast duck on rice', []],
  ['เป็ดย่าง', 'เป็ดย่าง (จาน)', 100, 'ပက်ယန် (ကျန်)', 'Roast duck (plate)', []],
  ['เป็ดย่าง', 'เป็ดย่างครึ่งตัว', 250, 'ပက်ယန် ခရိုင်တူဝါ - ဘဲကင်တစ်ဝက်', 'Roast duck, half', []],
  ['เป็ดย่าง', 'เป็ดย่างเต็มตัว', 480, 'ပက်ယန် တိမ်တူဝါ - ဘဲကင်တစ်ကောင်', 'Roast duck, whole', []],
  ['อาหารตามสั่ง', 'ลูกชิ้นปิ้ง 3 ไม้', 30, 'လုတ်ချင်ပိန် 3 ချောင်း', 'Grilled meatballs, 3 skewers', []],
  ['อาหารตามสั่ง', 'ข้าวผัดกระเพรา', 45, 'ကဖောင်', 'Basil stir-fry on rice', ['meat', 'spicy', 'more', 'egg', 'size']],
  ['อาหารตามสั่ง', 'ข้าวกระเพราเป็ด', 50, 'ကဖရော်ပက်', 'Basil duck on rice', ['spicy', 'more', 'egg', 'size']],
  ['อาหารตามสั่ง', 'ข้าวผัด', 55, 'ခေါက်ဖက်', 'Fried rice', ['meat', 'more', 'egg', 'size']],
  ['อาหารตามสั่ง', 'ข้าวผัดน้ำมันหอย', 45, 'နာမာဟွဲ', 'Oyster sauce stir-fry on rice', ['meat', 'more', 'egg', 'size']],
  ['อาหารตามสั่ง', 'ข้าวผัดพริกแกง', 45, 'ဖက်ဖီကိုင်', 'Curry paste stir-fry on rice', ['meat', 'spicy', 'more', 'egg', 'size']],
  ['อาหารตามสั่ง', 'ข้าวขาหมู', 55, 'ခါမူ', 'Stewed pork leg on rice', ['egg', 'size']],
  ['อาหารตามสั่ง', 'ข้าวไข่เจียว', 32, 'ခေါက်ခိုင်ကျော်', 'Omelette on rice', ['size']],
  ['อาหารตามสั่ง', 'ราดหน้า', 55, 'ရတ်နာ', 'Rad na (noodles in gravy)', []],
  ['อาหารตามสั่ง', 'สปาเก็ตตี้', 65, 'စပါကတ်တီ', 'Spaghetti', []],
  ['อาหารตามสั่ง', 'ข้าวเปล่า', 10, 'ခေါက်ပေါင်', 'Steamed rice', []],
  ['อาหารตามสั่ง', 'ไข่ดาว', 10, 'ခိုင်ဒေါက်', 'Fried egg', []],
  ['อาหารตามสั่ง', 'ไข่เจียว', 12, '(ကြက်ဥမွှေကြော်)ခိုင်ကျို', 'Omelette', []],
  ['ส้มตำ', 'ตำปูปลาร้า', 55, 'တမ်ပူပါလ', 'Papaya salad with crab and fermented fish', ['spicy']],
  ['ส้มตำ', 'ตำซั่ว', 55, 'တမ်စွ', 'Papaya salad with rice noodles (tam sua)', ['spicy']],
  ['ส้มตำ', 'ตำถั่ว', 55, 'တမ်ထို', 'Long bean salad', ['spicy']],
  ['ส้มตำ', 'ตำเส้นเล็ก', 55, 'တမ်စန်းလိတ်', 'Thin noodle salad', ['spicy']],
  ['ส้มตำ', 'ตำไข่เยี่ยวม้า', 65, 'တမ်ခိုင်ယွတ်မား', 'Papaya salad with century egg', ['spicy']],
  ['เครื่องเคียง', 'กากเจียว', 25, 'ခိုင်ကျော်', 'Crispy pork lard', []],
  ['เครื่องเคียง', 'แคปหมู', 10, 'ခက်မူ', 'Pork crackling', []],
  ['เครื่องเคียง', 'แคปหมูกระจก', 22, 'ခတ်မူကဆုတ်', 'Thin crispy pork rind', []],
  ['เครื่องเคียง', 'แคปวัว', 20, '(ခဲ့ဘွ)(အမဲခေါက်ကြော်)', 'Beef crackling', []],
  ['เครื่องเคียง', 'หนังปลากรอบ', 22, 'နန်ပါကော့', 'Crispy fish skin', []],
  ['เครื่องดื่ม', 'น้ำกระเจี๊ยบ', 25, 'နမ်ကကျတ်', 'Roselle juice', []],
  ['เครื่องดื่ม', 'น้ำโอเลี้ยง', 25, 'အိုလျန်း', 'Thai iced black coffee (oliang)', []],
  ['เครื่องดื่ม', 'ชาเย็น (สีส้ม)', 25, 'ချာထိုင်း (လိမ္မော်ရောင်)', 'Thai iced milk tea', []],
  ['เครื่องดื่ม', 'กาแฟโบราณ', 25, 'ကာဖဲဘိုလန်', 'Traditional Thai iced coffee', []],
  ['เครื่องดื่ม', 'ชาเขียว', 25, 'ဆျားချို', 'Iced green tea', []],
  ['เครื่องดื่ม', 'นมชมพูเย็น', 25, 'နံချိုဖူယင်', 'Iced pink milk', []],
  ['เครื่องดื่ม', 'ชามะนาว', 25, 'ဆျားမနဝ်', 'Iced lemon tea', []],
  ['เครื่องดื่ม', 'น้ำบ๊วย', 25, 'နမ့်ဘွဲ့', 'Plum juice', []],
  ['เครื่องดื่ม', 'น้ำลำไย', 25, 'နမ်လယိုင်', 'Longan juice', []],
  ['เครื่องดื่ม', 'น้ำเขียว', 15, 'နမ်းခီယော်', 'Green soda', []],
  ['เครื่องดื่ม', 'น้ำแดง', 15, 'နမ်းဒိန်', 'Red soda', []],
  ['เครื่องดื่ม', 'น้ำส้ม', 15, 'နမ်းဆုံ', 'Orange soda', []],
  ['เครื่องดื่ม', 'น้ำองุ่น', 15, 'နမ့်အငွင်', 'Grape soda', []],
  ['เครื่องดื่ม', 'สไปร์ท', 15, 'စပိုက်', 'Sprite', []],
  ['เครื่องดื่ม', 'โค้ก', 15, 'နမ့်ကုတ်', 'Coke', []],
  ['เครื่องดื่ม', 'โค้ก ซีโร่', 13, 'ကုတ်စီးဒိုး', 'Coke Zero', []],
  ['เครื่องดื่ม', 'น้ำส้มสแปลช', 15, 'နမ့်စုမ့်စပလက်', 'Splash orange juice', []],
  ['เครื่องดื่ม', 'น้ำชเวปส์', 18, 'နမ်းရှဝေ့', 'Schweppes', []],
  ['เครื่องดื่ม', 'น้ำเปล่า', 10, 'နမ့်ပေါင်', 'Water', []],
  ['เครื่องดื่ม', 'น้ำแข็ง', 2, 'နမ်းခိန်', 'Ice', []],
  ['เครื่องดื่ม', 'น้ำอัดลม (แก้วโอ่ง)', 25, 'ကယ်အုန်', 'Soft drink in a jar glass', []],
  ['ขนมหวาน', 'ขนมถ้วย', 10, 'ခနွမ်ထွေ့', 'Coconut pudding cup', []],
  ['ขนมหวาน', 'ไอติม', 25, 'အိုင်တိမ်', 'Ice cream', []],
  ['ขนมหวาน', 'โรตีกรอบ', 35, 'လို့တီကော့', 'Crispy roti', []],
  ['เตนท์', 'เป็ด 50', 50, 'ပက် 50', 'Duck 50', []],
  ['เตนท์', 'เป็ด 70', 70, '(ဘဲကင်ထမင်း)ပွဲကြီး', 'Duck on rice, large (70)', []],
  ['เตนท์', 'เป็ด 100', 100, 'ဘဲကင်အလွတ်', 'Duck only (100)', []],
  ['เตนท์', 'เป็ดครึ่งตัว', 250, 'ပက်ခရိုင်တူဝါ - ဘဲကင်တစ်ဝက်', 'Half duck', []],
  ['เตนท์', 'เป็ดเต็มตัว', 480, 'ပက်တိမ်တူဝါ - ဘဲကင်တစ်ကောင်', 'Whole duck', []],
  ['เตนท์', 'คอเป็ด', 10, 'ခေါ်ပက် - ဘဲလည်ပင်း', 'Duck neck', []],
  ['เตนท์', 'โครงเป็ด', 20, 'ခရုံပက် - ဘဲအရိုး', 'Duck carcass', []],
  ['เตนท์', 'น้ำแข็ง', 2, 'နမ်းခိန်', 'Ice', []],
  ['เตนท์', 'น้ำเปล่า', 10, 'နမ့်ပေါင်', 'Water', []],
  ['เตนท์', 'น้ำอัดลม', 15, 'နမ်းအပ်လုံ', 'Soft drink', []],
  ['เตนท์', 'น้ำหวาน 25', 25, 'နမ်းဝမ်း - အချိုရည် တစ်ခွက် 25', 'Sweet drink (25)', []],
  ['เตนท์', 'แก้วโอ่ง', 30, 'ကယ်အုန်', 'Jar glass drink', []],
  ['เตนท์', 'ไข่ดาว', 10, 'ခိုင်ဒေါက်', 'Fried egg', []],
  ['เตนท์', 'ไข่เจียว', 12, 'ခိုင်ကျော်', 'Omelette', []]
];
const SEED_WORDS = { /* ไทย: [พม่า, อังกฤษ] — หมวดและตัวเลือก */
  'ก๋วยเตี๋ยว': ['ကွေ့တီယို', 'Noodles'], 'เป็ดย่าง': ['ဘဲကင်', 'Roast duck'], 'อาหารตามสั่ง': ['မီးဖိုချောင်အစားအစာ', 'Rice dishes'], 'ส้มตำ': ['သင်္ဘောသီးထောင်း', 'Papaya salad'], 'เครื่องเคียง': ['အကြော်စုံ', 'Sides'], 'เครื่องดื่ม': ['အချိုရည်များ', 'Drinks'], 'ขนมหวาน': ['အချိုပွဲမုန့်', 'Desserts'], 'เตนท์': ['မိုးကာတဲ', 'Tent stall'], 'เครื่องปรุง': ['အစာပလာများ', 'Condiments'],
  'เส้น': ['စန်း', 'Noodle type'], 'เล็ก': ['ဆွေ့န်လေ့တ်', 'Thin rice noodles'], 'ใหญ่': ['ဆွေ့န်ယိုင်', 'Wide rice noodles'], 'หมี่ขาว': ['မီခေါင်', 'Rice vermicelli'], 'วุ้นเส้น': ['ဝန်းဆင့်', 'Glass noodles'], 'บะหมี่เหลือง': ['စန်းမီလို - အဝါရောင်', 'Egg noodles'], 'มาม่า': ['မာမာ', 'Instant noodles'],
  'เนื้อสัตว์': ['အမဲသားသေး', 'Meat'], 'ไก่': ['ကိုင်', 'Chicken'], 'หมู': ['ဝက်', 'Pork'], 'หมูเปื่อย': ['ဝက်ပုတ်', 'Stewed pork'], 'เนื้อ': ['အမဲသား', 'Beef'], 'เนื้อเปื่อย': ['မဲပုတ်', 'Stewed beef'], 'กุ้ง': ['ကုန်း', 'Shrimp'], 'หมึก': ['မွတ်', 'Squid'], 'ทะเล': ['ထလေ', 'Seafood'],
  'เครื่อง': ['ခရွန်း', 'Toppings'], 'ใส่ทุกอย่าง': ['ဆိုင့်ထုတ်ယန့်', 'Everything'], 'สด': ['ဆုတ် - အစိမ်း', 'Fresh meat'], 'เปื่อย': ['ပွိုက် - ပြုတ်နူး', 'Stewed meat'], 'ตับ': ['တပ် - အသည်း', 'Liver'], 'ลูกชิ้น': ['လုတ်ချင် - အသားလုံး', 'Meatballs'], 'เนื้อหมัก (เฉพาะเนื้อเท่านั้น)': ['နွားမုတ်', 'Marinated beef (beef only)'], 'ตับหมัก (เฉพาะเนื้อเท่านั้น)': ['တက်မွတ်', 'Marinated liver (beef only)'],
  'ระดับความเผ็ด': ['ဖက်', 'Spice level'], 'ไม่ปรุง': ['မိုင်ပရုန်', 'Unseasoned'], 'ไม่เผ็ด (ไม่ใส่พริก ใส่น้ำส้มได้)': ['မိုင်ဖက် (မိုင်ဖရိတ် နမ်ဆွမ်ဒိုင်)', 'Not spicy (no chili, vinegar is fine)'], 'เผ็ดน้อย': ['ဖက်နွိုင်', 'Mild'], 'เผ็ดปกติ': ['ဖက်ပေါက်ကတိ', 'Medium spicy'], 'เผ็ดมากกก': ['ဖက်မတ်', 'Very spicy'],
  'น้ำ': ['နမ်း', 'Soup'], 'น้ำ (ใส่เลือด)': ['ဟင်း - သွေးထည့်', 'Soup with blood (boat-noodle style)'], 'น้ำ (ใส่เลือด+เพิ่มน้ำ)': ['နမ်း - လွတ် + ဖိမနမ်း', 'Soup with blood, extra soup'], 'แห้ง': ['ဟိန်', 'Dry (no soup)'], 'น้ำใส (ไม่เลือด)': ['နမ်းဆိုင် (မိုင်လွတ်)', 'Clear soup (no blood)'],
  'ไม่พริก': ['မိုင်ဖရိတ်', 'No chili'], 'เผ็ดมาก': ['ဖက်မတ်', 'Very spicy'], 'เส้นสปาเก็ตตี้': ['စပါကတ်တီ', 'Spaghetti'], 'ผักกวางตุ้ง': ['ဖက်ကွမ်တုန်', 'Choy sum'], 'ขิงดอง': ['ခင်ဒေါင်', 'Pickled ginger'], 'รสชาติ': ['ရို့ချတ်', 'Taste'], 'สูตรของทางร้าน': ['ဆုတ်ခေါင်ထန်ရန် - ဆိုင်အရသာ', 'House recipe'], 'เผ็ด เปรี้ยว หวาน': ['ဖက် ပြီယော် ဝမ်း', 'Spicy, sour, sweet'], 'เผ็ด': ['ဖက်', 'Spicy'], 'เปรี้ยว': ['ချဉ်', 'Sour'], 'ไม่เปรี้ยว': ['မိုင်ပြီယော်', 'Not sour'], 'เปรี้ยวนำ': ['ပြီယော်နမ်', 'Extra sour'], 'หวาน': ['ဝမ်း', 'Sweet'], 'ไม่หวาน': ['မိုင်ဝမ်း', 'Not sweet'], 'หวานนำ': ['ဝမ်းနမ်', 'Extra sweet'], 'เค็ม': ['ခိမ်', 'Salty'], 'ไม่เค็ม': ['မိုင်ခိမ်', 'Not salty'], 'เค็มนำ': ['ခိမ်နမ်', 'Extra salty'], 'ปลาร้า': ['ပလာရာ', 'Fermented fish (pla ra)'], 'ไม่ปลาร้า': ['မိုင်ပလာရာ', 'No fermented fish'], 'ตัวเลือก': ['တူဝါလွတ်', 'Choice'], 'รูปแบบ': ['ရုပ်ဘဲပ်', 'Cut'], 'เนื้อ+หนัง': ['အသားသရေ', 'Meat and skin'], 'เนื้อล้วน': ['အသား', 'Meat only'], 'หนังล้วน': ['သရေ', 'Skin only'], 'กลับบ้าน (พิเศษ)': ['ကလပ်ဘန် ++', 'Takeaway (large)'], 'เพิ่มเส้น': ['ဖွမ်စန်း', 'Extra noodles'],
  'หมูสับ': ['ဝက်သေး', 'Minced pork'], 'ไก่สับ': ['ကြက်သေး', 'Minced chicken'], 'ชะอม': ['ချာအို', 'Acacia (cha-om)'], 'ไหลบัว': ['လိုင်ဘူဝါ', 'Lotus stem'], 'หน่อไม้ดอง': ['နော့မိုင်ဒေါင်', 'Pickled bamboo shoots'], 'ขนมจีน': ['ခနုံကျင်း', 'Rice noodles (khanom chin)'], 'ข้าวโพด': ['ခေါက်ဖုတ်', 'Corn'], 'หมูยอ': ['မူယော်', 'Vietnamese pork sausage'], 'ลูกชิ้นหมู': ['လုတ်ချင်မူ', 'Pork meatballs'], 'ลูกชิ้นเนื้อ': ['လုတ်ချင်နွာ', 'Beef meatballs'], 'กุ้งสุก': ['ကုန်းစွတ်', 'Cooked shrimp'], 'ปลาหมึก': ['(ရေဘဝဲ)ပါမွတ်', 'Squid'], 'ไข่เค็ม': ['ခိုင်ခိမ်', 'Salted egg'], 'บะหมี่หยก': ['စန်းမီယောက် - အစိမ်းရောင်', 'Green (jade) noodles'],
  'เป็ดย่าง': ['ပက်ယန်', 'Roast duck'], 'ราดหน้า': ['ရတ်နာ', 'Rad na'], 'เพิ่มเติม': ['ဖွမ်တွမ်', 'Extras'],
  'ผัก': ['ဖက် - အရွက်', 'Vegetables'], 'ไม่ผัก': ['မိုင်ဖက် - အရွက်မထည့်', 'No vegetables'],
  'ไข่': ['ခိုင်', 'Egg'], 'ไข่ดาวไม่สุก': ['ခိုင်ဒေါက်မိုင်စွတ်', 'Fried egg, runny'], 'ไข่ดาวสุก': ['ခိုင်ဒေါက်စွတ်', 'Fried egg, well done'], 'ไข่เยี่ยวม้า': ['ခိုင်ယွတ်မား', 'Century egg'], 'ไข่ชะอม': ['ခိုင်ချာအို', 'Acacia omelette'],
  'ขนาด': ['အနည်းအများ', 'Size'], 'ธรรมดา': ['ထမ်မဒါ', 'Regular'], 'พิเศษ': ['ဖိစေတ်', 'Large'], 'เปลี่ยนเป็นกับข้าว จานเล็ก': ['ကပ်ခေါ် ကျန်လက်', 'As a side dish, small plate'], 'เปลี่ยนเป็นกับข้าว จานกลาง': ['ကပခေါင် ချန်ကလန်', 'As a side dish, medium plate'], 'เปลี่ยนเป็นกับข้าว จานใหญ่': ['ကပ်ခေါင် ချန်ရှိုင်', 'As a side dish, large plate']
};
const ch = a => a.map(x => Array.isArray(x) ? {name: x[0], price: x[1]} : {name: x, price: 0});
const NB = ['nmeat', 'part', 'spicy', 'soup', 'veg'], SOM = ['taste', 'somspicy', 'sour', 'sweet', 'salty', 'plara', 'somadd'], NTA = ['lineta', ...NB, 'addline'], RICE = ['spicy2', 'veg', 'egg', 'size'];
const SEED_OPTS = { /* เมนูไหนใช้ตัวเลือกกลุ่มไหน */
  'ก๋วยเตี๋ยวชาม 25': ['line25', ...NB, 'addline25'], 'ก๋วยเตี๋ยวเรือชาม 40': ['line40', ...NB, 'addline', 'ta40'], 'เกาเหลา': [...NB, 'ta40'],
  'ก๋วยเตี๋ยว (กลับบ้าน)': [...NTA, 'sizeta'], 'เตี๋ยวกลับบ้าน +': NTA, 'เตี๋ยวกลับบ้าน ++': NTA,
  'ก๋วยเตี๋ยวเป็ดย่าง': ['lineduck', 'styleduck', 'sizeduck', 'vegduck'], 'ข้าวหน้าเป็ด': ['sizeduck', 'vegduck'], 'เนื้อลวก': ['meatboil'], 'หม้อไฟรสจนา': ['meatpot'], 'เส้นลวก': ['lineb'],
  'ข้าวผัดกระเพรา': ['meatkp', ...RICE], 'ข้าวผัดน้ำมันหอย': ['meatkp', ...RICE], 'ข้าวผัดพริกแกง': ['meatkp', ...RICE], 'ข้าวผัด': ['meat55', ...RICE],
  'ข้าวกระเพราเป็ด': ['spicy2', 'veg', 'egg', 'sizekpd'], 'ข้าวขาหมู': ['cut', 'egg', 'sizeta'], 'ข้าวไข่เจียว': ['omfill', 'size'],
  'ราดหน้า': ['line2', 'meat55'], 'สปาเก็ตตี้': ['line3', 'meat65'], 'น้ำอัดลม (แก้วโอ่ง)': ['soda'],
  'ตำปูปลาร้า': SOM, 'ตำซั่ว': SOM, 'ตำถั่ว': SOM, 'ตำเส้นเล็ก': SOM, 'ตำไข่เยี่ยวม้า': SOM
};
const DEF = {
  shop: 'ก๋วยเตี๋ยวเรือรสจนา', tables: 12, promptpay: '', footer: 'ขอบคุณที่อุดหนุนค่ะ', clangs: ['th', 'en', 'zh'], slangs: ['th', 'my', 'lo', 'en'],
  cats: ['ก๋วยเตี๋ยว', 'เป็ดย่าง', 'อาหารตามสั่ง', 'ส้มตำ', 'เครื่องเคียง', 'เครื่องดื่ม', 'ขนมหวาน', 'เตนท์'],
  groups: [
    {id: 'line25', name: 'เส้น', note: 'เส้นสำหรับชาม 25', required: true, multi: false, choices: ch(['เล็ก', 'ใหญ่', 'หมี่ขาว', 'วุ้นเส้น'])},
    {id: 'line40', name: 'เส้น', note: 'ก๋วยเตี๋ยวชาม 40', required: true, multi: false, choices: ch(['เล็ก', 'ใหญ่', 'หมี่ขาว', 'วุ้นเส้น', 'บะหมี่เหลือง', 'มาม่า'])},
    {id: 'nmeat', name: 'เนื้อสัตว์', note: 'ก๋วยเตี๋ยว', required: true, multi: false, choices: ch(['หมู', 'เนื้อ'])},
    {id: 'part', name: 'เครื่อง', required: true, multi: true, max: 4, choices: ch(['ใส่ทุกอย่าง', 'สด', 'เปื่อย', 'ตับ', 'ลูกชิ้น', 'เนื้อหมัก (เฉพาะเนื้อเท่านั้น)', 'ตับหมัก (เฉพาะเนื้อเท่านั้น)'])},
    {id: 'spicy', name: 'ระดับความเผ็ด', required: true, multi: false, choices: ch(['ไม่ปรุง', 'ไม่เผ็ด (ไม่ใส่พริก ใส่น้ำส้มได้)', 'เผ็ดน้อย', 'เผ็ดปกติ', 'เผ็ดมากกก'])},
    {id: 'soup', name: 'น้ำ', required: true, multi: false, choices: ch(['น้ำ (ใส่เลือด)', 'น้ำ (ใส่เลือด+เพิ่มน้ำ)', 'แห้ง', 'น้ำใส (ไม่เลือด)'])},
    {id: 'veg', name: 'ผัก', required: false, multi: false, choices: ch(['ผัก', 'ไม่ผัก'])},
    {id: 'meat55', name: 'เนื้อสัตว์', note: 'อาหารตามสั่ง 55 บาท', required: true, multi: false, choices: ch(['ไก่', 'หมู', ['หมูเปื่อย', 5], ['เนื้อ', 10], ['เนื้อเปื่อย', 15], ['เป็ดย่าง', 10], ['กุ้ง', 10], ['หมึก', 10], ['ทะเล', 10]])},
    {id: 'egg', name: 'ไข่', required: false, multi: true, max: 2, rep: true, choices: ch([['ไข่ดาวไม่สุก', 10], ['ไข่ดาวสุก', 10], ['ไข่เจียว', 12], ['ไข่เยี่ยวม้า', 20], ['ไข่ชะอม', 20]])},
    {id: 'spicy2', name: 'ระดับความเผ็ด', note: 'อาหารตามสั่ง', required: true, multi: false, choices: ch(['ไม่พริก', 'เผ็ดน้อย', 'เผ็ดปกติ', 'เผ็ดมาก'])},
    {id: 'cut', name: 'รูปแบบ', required: false, multi: false, choices: ch(['เนื้อ+หนัง', 'เนื้อล้วน', 'หนังล้วน'])},
    {id: 'lineb', name: 'เส้น', note: 'เส้นลวก', required: true, multi: false, choices: ch(['เล็ก', 'ใหญ่', 'หมี่ขาว', 'วุ้นเส้น', ['บะหมี่เหลือง', 5], ['มาม่า', 10]])},
    {id: 'meat65', name: 'เนื้อสัตว์', note: 'สปาเก็ตตี้', required: true, multi: false, choices: ch(['ไก่', 'หมู', ['หมูเปื่อย', 5], ['เนื้อ', 10], ['เนื้อเปื่อย', 15], ['เป็ดย่าง', 10], ['กุ้ง', 20], ['หมึก', 20], ['ทะเล', 20]])},
    {id: 'ta40', name: 'กลับบ้าน', note: 'ก๋วยเตี๋ยวเรือ', required: false, multi: false, choices: ch([['กลับบ้าน', 15], ['กลับบ้าน (พิเศษ)', 25]])},
    {id: 'line2', name: 'เส้น', note: 'ราดหน้า', required: true, multi: false, choices: ch(['ใหญ่', 'หมี่ขาว'])},
    {id: 'addline', name: 'เพิ่มเส้น', note: 'ก๋วยเตี๋ยวเรือ', pre: true, required: false, multi: true, choices: ch([['เล็ก', 10], ['ใหญ่', 10], ['หมี่ขาว', 10], ['วุ้นเส้น', 10], ['บะหมี่เหลือง', 15], ['มาม่า', 20]])},
    {id: 'addline25', name: 'เพิ่มเส้น', note: 'ก๋วยเตี๋ยวเรือชาม 25', pre: true, required: false, multi: true, choices: ch([['เล็ก', 10], ['ใหญ่', 10], ['หมี่ขาว', 10], ['วุ้นเส้น', 10]])},
    {id: 'meatboil', name: 'เนื้อสัตว์', note: 'เนื้อลวก', required: true, multi: false, choices: ch(['หมู', ['เนื้อ', 10]])},
    {id: 'omfill', name: 'เนื้อสัตว์', note: 'หมูสับ/ไก่สับ/ชะอม', required: false, multi: true, choices: ch([['หมูสับ', 10], ['ไก่สับ', 10], ['ชะอม', 5]])},
    {id: 'somadd', name: 'เพิ่มเติม', note: 'ส้มตำ', required: false, multi: true, max: 10, rep: true, choices: ch([['ไหลบัว', 5], ['หน่อไม้ดอง', 5], ['ขนมจีน', 10], ['ข้าวโพด', 10], ['หมูยอ', 10], ['แคปหมู', 10], ['ลูกชิ้นหมู', 10], ['ลูกชิ้นเนื้อ', 10], ['หมูเปื่อย', 10], ['เนื้อเปื่อย', 20], ['ทะเล', 20], ['กุ้งสุก', 20], ['ปลาหมึก', 20], ['มาม่า', 20], ['ไข่เค็ม', 20], ['ไข่เยี่ยวม้า', 20], ['แคปวัว', 20]])},
    {id: 'sizeduck', name: 'ขนาด', note: 'เป็ด', required: false, multi: false, choices: ch(['ธรรมดา', ['พิเศษ', 20]])},
    {id: 'sizekpd', name: 'ขนาด', note: 'ข้าวกระเพราเป็ด', required: false, multi: false, choices: ch(['ธรรมดา', ['พิเศษ', 20], ['เปลี่ยนเป็นกับข้าว จานเล็ก', 10], ['เปลี่ยนเป็นกับข้าว จานกลาง', 20], ['เปลี่ยนเป็นกับข้าว จานใหญ่', 50]])},
    {id: 'styleduck', name: 'รูปแบบ', note: 'ก๋วยเตี๋ยวเป็ด', required: true, multi: false, choices: ch(['น้ำ', 'แห้ง'])},
    {id: 'meatpot', name: 'เนื้อสัตว์', note: 'หม้อไฟ', required: true, multi: false, choices: ch(['หมู', ['เนื้อ', 20]])},
    {id: 'lineduck', name: 'เส้น', note: 'ก๋วยเตี๋ยวเป็ด', required: true, multi: false, choices: ch(['เล็ก', 'ใหญ่', 'หมี่ขาว', 'วุ้นเส้น', 'มาม่า', 'บะหมี่เหลือง', 'บะหมี่หยก', ['เกาเหลา', 20]])},
    {id: 'sizeta', name: 'ขนาด', note: 'ก๋วยเตี๋ยวกลับบ้าน / ขาหมู', required: false, multi: false, choices: ch(['ธรรมดา', ['พิเศษ', 10]])},
    {id: 'line3', name: 'เส้น', note: 'สปาเก็ตตี้', required: true, multi: false, choices: ch(['เส้นสปาเก็ตตี้', 'ใหญ่', 'หมี่ขาว'])},
    {id: 'lineta', name: 'เส้น', note: 'ก๋วยเตี๋ยวกลับบ้าน', required: true, multi: false, choices: ch(['เล็ก', 'ใหญ่', 'หมี่ขาว', 'วุ้นเส้น', 'บะหมี่เหลือง', 'มาม่า', 'เกาเหลา'])},
    {id: 'vegduck', name: 'ผัก', note: 'กวางตุ้ง/ขิงดอง', required: false, multi: true, choices: ch(['ผักกวางตุ้ง', 'ขิงดอง', 'ไม่ผัก'])},
    {id: 'taste', name: 'รสชาติ', note: 'ส้มตำ', required: false, multi: false, choices: ch(['สูตรของทางร้าน', 'เผ็ด เปรี้ยว หวาน'])},
    {id: 'somspicy', name: 'เผ็ด', note: 'ส้มตำ', required: true, multi: false, choices: ch(['ไม่พริก', 'เผ็ดน้อย', 'เผ็ดปกติ', 'เผ็ดมาก'])},
    {id: 'sour', name: 'เปรี้ยว', note: 'ส้มตำ', required: false, multi: false, choices: ch(['ไม่เปรี้ยว', 'เปรี้ยวนำ'])},
    {id: 'sweet', name: 'หวาน', note: 'ส้มตำ', required: false, multi: false, choices: ch(['ไม่หวาน', 'หวานนำ'])},
    {id: 'salty', name: 'เค็ม', note: 'ส้มตำ', required: false, multi: false, choices: ch(['ไม่เค็ม', 'เค็มนำ'])},
    {id: 'plara', name: 'ปลาร้า', note: 'ส้มตำ', required: false, multi: false, choices: ch(['ไม่ปลาร้า', 'ปลาร้า'])},
    {id: 'soda', name: 'ตัวเลือก', note: 'น้ำอัดลม', required: true, multi: false, choices: ch(['โค้ก', 'สไปร์ท', 'น้ำแดง', 'น้ำส้ม', 'น้ำเขียว', 'น้ำองุ่น'])},
    {id: 'meatkp', name: 'เนื้อสัตว์', note: 'กะเพรา', required: true, multi: false, choices: ch(['ไก่', 'หมู', ['หมูเปื่อย', 5], ['เนื้อ', 20], ['เนื้อเปื่อย', 25], ['กุ้ง', 20], ['หมึก', 20], ['ทะเล', 20]])},
    {id: 'size', name: 'ขนาด', note: 'มีเปลี่ยนเป็นกับข้าว', required: false, multi: false, choices: ch(['ธรรมดา', ['พิเศษ', 10], ['เปลี่ยนเป็นกับข้าว จานเล็ก', 10], ['เปลี่ยนเป็นกับข้าว จานกลาง', 20], ['เปลี่ยนเป็นกับข้าว จานใหญ่', 50]])}
  ],
  menu: SEED_MENU.map((m, i) => ({id: 'm' + i, cat: m[0], name: m[1], price: m[2], opts: SEED_OPTS[m[1]] || [], out: false})),
  dict: Object.assign(Object.fromEntries(Object.entries(SEED_WORDS).map(([k, v]) => [k, v[0] ? {my: v[0], en: v[1]} : {en: v[1]}])), Object.fromEntries(SEED_MENU.slice().reverse().map(m => [m[1], {my: m[3], en: m[4]}])))
};
let D = Object.assign({id: 'd' + uid(), name: 'Staff', lang: 'th', db: '', voice: true, vlang: '', say: {order: 1, cooked: 1, served: 0, call: 1, paid: 1}, autoPrint: false, pcats: [], plang: '', pth: true, paper: 80, kcat: '', role: 'all', t1: 8, t2: 15}, (() => { try { return JSON.parse(localStorage.getItem('rj_dev')) || {}; } catch (e) { return {}; } })());
const saveD = () => localStorage.setItem('rj_dev', JSON.stringify(D));
let L = {}, SALES = [], pending = 0, seq = 0, syncErr = '', seen = null, P = null;
const V = {tab: 'tables', table: null, cat: '', day: dayKey(Date.now()), draft: {}, log: [], set: '', trl: ''};
async function W(p) { pending++; seq++; try { await p; syncErr = ''; } catch (e) { syncErr = e.message; toast(tx('fail')); } finally { pending--; } }
function saveM() { M.v = Date.now(); W(store.put('menu', JSON.stringify(M))); W(store.put('live/mv', M.v)); if (!FB) { clearTimeout(ADT); ADT = setTimeout(() => autoDict(), 1500); } }
/* แปลชื่อเมนู หมวด ตัวเลือก ที่ยังไม่มีคำแปล ให้ครบทุกภาษาที่เปิดไว้ */
let ADT = 0, ADRUN = false;
const dictKeys = () => [...new Set([...M.cats, ...M.menu.map(m => m.name), ...M.groups.flatMap(g => [g.name, ...g.choices.map(c => c.name)])])].filter(Boolean);
function dictMissing() { const ls = [...new Set([...M.clangs, ...M.slangs])].filter(l => l !== 'th' && LANGS[l]); return dictKeys().flatMap(k => ls.filter(l => !((M.dict[k] || {})[l])).map(l => [k, l])); }
async function autoDict(loud) {
  if (ADRUN || !M || M.mt === 'off') return; const todo = dictMissing(); if (!todo.length) { if (loud) toast('แปลครบทุกคำแล้ว'); return; }
  ADRUN = true; let n = 0, i = 0; if (loud) toast('กำลังแปล ' + todo.length + ' คำ…');
  const work = async () => { while (i < todo.length) { const [k, l] = todo[i++]; const out = await mt(k, l); if (out && out !== '=' && !((M.dict[k] || {})[l])) { (M.dict[k] = M.dict[k] || {})[l] = out; n++; } } };
  try { await Promise.all([work(), work(), work(), work()]); } finally { ADRUN = false; }
  if (n) { M.v = Date.now(); W(store.put('menu', JSON.stringify(M))); W(store.put('live/mv', M.v)); }
  if (loud) toast('แปลเพิ่ม ' + n + ' คำแล้ว ตรวจและแก้ได้ในหน้านี้'); if (n && V.tab === 'set') draw();
}
const tableIds = () => [...Array.from({length: M.tables}, (_, i) => 't' + (i + 1)), 't0'];
const itemsOf = tb => Object.entries((L[tb] || {}).items || {}).map(([k, x]) => ({k, ...x})).sort((a, b) => a.at - b.at);
const vl = () => speakLang(D.vlang || D.lang);

/* ---------- เหตุการณ์ + เสียงประกาศข้ามเครื่อง ---------- */
/* ออเดอร์ใหม่: "โต๊ะ 3 สั่งใหม่" + หมวดละจำนวน — ชื่อหมวดพูดเป็นภาษาไทย ยกเว้นเครื่องที่ใช้ภาษาอังกฤษ */
function ordParts(e, l) { const c = {}; (e.items || []).forEach(x => { const k = x.cat || (M.menu.find(m => m.name === x.name) || {}).cat || x.name; c[k] = (c[k] || 0) + (Number(x.qty) || 1); });
  const ks = Object.keys(c).sort((a, b) => { const i = M.cats.indexOf(a), j = M.cats.indexOf(b); return (i < 0 ? 99 : i) - (j < 0 ? 99 : j); }), en = l === 'en';
  return [fmt(TL('sOrderC', l), [tNameL(e.t, l)]), ks.map(k => (en ? trL(k, 'en') : k) + ' ' + c[k]).join(en ? ', ' : ' ')]; }
function evText(e, l) {
  const tn = tNameL(e.t, l), names = (e.items || []).slice(0, 4).map(x => trL(x.name, l) + (x.qty > 1 ? ' ' + x.qty : '')).join(', ');
  if (e.type === 'order') return ordParts(e, l).join(' ');
  if (e.type === 'cooked') return e.all ? fmt(TL('sCookedAll', l), [tn]) : fmt(TL('sCooked', l), [tn, names]);
  if (e.type === 'served') return e.all ? fmt(TL('sServedAll', l), [tn]) : fmt(TL('sServed', l), [tn, names]);
  if (e.type === 'cancel') return fmt(TL('sCancel', l), [tn, names]);
  if (e.type === 'call') return fmt(TL(e.call === 'bill' ? 'sBill' : 'sStaff', l), [tn]);
  if (e.type === 'paid') return e.method === 'cash' ? fmt(TL('sCash', l), [tn, e.net, e.recv, e.chg]) : fmt(TL('sQr', l), [tn, e.net]);
  return '';
}
function announce(e) { if (document.hidden && D.notif && window.Notification && Notification.permission === 'granted') { try { new Notification(M.shop, {body: evText(e, UL)}); } catch (x) {} } V.log.unshift(e); V.log.length = Math.min(V.log.length, 40); if (D.voice && (D.say[e.type] ?? (e.type === 'cancel' ? 1 : 0))) { if (e.dev !== D.id) beep(); const l = vl(); if (e.type === 'order' && l !== 'th' && l !== 'en') { const [h, t] = ordParts(e, l); speak(h, l); speak(t, 'th'); } else speak(evText(e, l), l); } }
function emit(e) { e = {...e, at: Date.now(), dev: D.id, by: D.name}; const k = 'e' + uid(); if (seen) seen.add(k); announce(e); W(store.put('live/events/' + k, e)); }
function handleEvents(evs) {
  const ks = Object.keys(evs).sort();
  if (!seen) { seen = new Set(ks); return; }
  ks.forEach(k => { if (!seen.has(k)) { seen.add(k); if (evs[k] && evs[k].dev !== D.id) announce(evs[k]); } });
  if (ks.length > 30) ks.forEach(k => { if (evs[k].at < Date.now() - 300000) store.del('live/events/' + k).catch(() => {}); });
}
async function poll() {
  const s = seq; let lv; try { lv = await store.get('live') || {}; syncErr = ''; } catch (e) { syncErr = e.message; return; }
  if (pending || s !== seq) return;
  let ch = false;
  if (lv.mv && lv.mv !== M.v) { try { const raw = await store.get('menu'); if (raw) { M = normM(JSON.parse(raw)); ch = true; loadMtKey(); } } catch (e) {} }
  const nt = normT(lv.tables); if (JSON.stringify(nt) !== JSON.stringify(L)) { L = nt; ch = true; }
  const sh = lv.shift || ''; if (sh !== JSON.stringify(SHIFT || '').replace(/^""$/, '')) { try { SHIFT = sh ? JSON.parse(sh) : null; } catch (e) {} if (['sales', 'dash'].includes(V.tab) && !$('#modal').innerHTML) draw(); }
  if (!OWN) { handleEvents(lv.events || {}); autoPrint(); noteWork(); pjobs(lv.pjobs); }
  if (ch && !['set', 'sales'].includes(V.tab)) draw();
}

/* ---------- พิมพ์ผ่านคอมเคาน์เตอร์ ---------- */
let PBUSY = 0; const PDONE = new Set();
function sendPJob(j) { W(store.put('live/pjobs/j' + uid(), JSON.stringify({...j, at: Date.now(), by: D.name}))); toast(tx('sentPrint')); }
function pjobs(js) {
  if (!D.phost || !js || PBUSY > Date.now()) return;
  const k = Object.keys(js).sort().find(k => !PDONE.has(k)); if (!k) return;
  PDONE.add(k); store.del('live/pjobs/' + k).catch(() => {}); let j; try { j = JSON.parse(js[k]); } catch (e) { return; }
  if (j.at < Date.now() - 3600000) return; PBUSY = Date.now() + 4000;
  if (j.k === 'tk') printTickets(j.jobs, true); else if (j.k === 'rc') receipt(j.s, j.paid, true);
}
/* ---------- พิมพ์ใบครัว ---------- */
const inCats = (x, cats) => !cats || !cats.length || cats.includes(x.cat);
function autoPrint() {
  if (!D.autoPrint) return; const jobs = [];
  Object.keys(L).forEach(tb => { const its = itemsOf(tb).filter(x => x.status === 'new' && !x.pr && inCats(x, D.pcats)); if (its.length) { its.forEach(x => { L[tb].items[x.k].pr = 1; W(store.put(`live/tables/${tb}/items/${x.k}/pr`, 1)); }); jobs.push([tb, its]); } });
  if (jobs.length) printTickets(jobs, true);
}
function editNote(tb, k) { const x = L[tb].items[k], ls = [...new Set([UL, 'th'])], cur = l => { const t = (x.nt || {})[l]; return t && t !== '=' ? t : ''; };
  modal(`<h2>แก้คำแปลหมายเหตุ</h2><label>ข้อความเดิม</label><input readonly value="${esc(x.note)}">${ls.map(l => `<label>คำแปล — ${LANGS[l][0]}</label><input class="enT" data-l="${l}" value="${esc(cur(l))}">`).join('')}
  <label class="ck mt"><input type="checkbox" id="enR" checked><span>จำคำแปลนี้ไว้ ใช้กับหมายเหตุเดียวกันครั้งต่อไป</span></label><div class="row mt"><button onclick="modal()">${tx('cancel')}</button><button class="p" onclick="saveNote('${tb}','${k}')">${tx('confirm')}</button></div>`); }
function saveNote(tb, k) { const x = L[tb].items[k], rem = $('#enR').checked; x.nt = x.nt || {};
  document.querySelectorAll('.enT').forEach(e => { const l = e.dataset.l, v = e.value.trim() || '='; x.nt[l] = v; NTC[x.note + '|' + l] = v; W(store.put(`live/tables/${tb}/items/${k}/nt/${l}`, v)); if (rem && v !== '=') (M.dict[x.note] = M.dict[x.note] || {})[l] = v; });
  if (rem) saveM(); modal(); draw(); }
function noteWork() {
  const ls = [...new Set(['th', D.lang, D.plang || D.lang, vl(), ...(M.slangs || [])])];
  Object.keys(L).forEach(tb => Object.entries(L[tb].items).forEach(([k, x]) => { if (!x.note) return; ls.forEach(l => { const bk = k + l; if ((x.nt || {})[l] != null || NTB[bk] > Date.now()) return; NTB[bk] = Date.now() + 60000;
    mt(x.note, l).then(out => { const it = L[tb] && L[tb].items[k]; if (out == null || !it) return; (it.nt = it.nt || {})[l] = out; W(store.put(`live/tables/${tb}/items/${k}/nt/${l}`, out)); if (!['set', 'sales', 'dash'].includes(V.tab)) draw(); }); }); }));
}
async function printTickets(jobs, here) {
  if (D.rprint && !here) return sendPJob({k: 'tk', jobs});
  const pl = D.plang || D.lang, el = $('#print');
  await Promise.race([Promise.all(jobs.flatMap(j => j[1]).filter(x => x.note).flatMap(x => [mt(x.note, pl), mt(x.note, 'th')])), new Promise(r => setTimeout(r, 4000))]);
  el.className = 'tk';
  const cut = D.cut || 'item';
  if (cut === 'item' || cut === 'unit') jobs = jobs.flatMap(([tb, its]) => { const one = cut === 'unit' ? its.flatMap(x => Array.from({length: x.qty}, () => ({...x, qty: 1}))) : its; return one.map((x, i) => [tb, [x], (i + 1) + '/' + one.length]); });
  else if (cut === 'cat') jobs = jobs.flatMap(([tb, its]) => { const cs = [...new Set(its.map(x => x.cat))]; return cs.map((c, i) => [tb, its.filter(x => x.cat === c), (i + 1) + '/' + cs.length]); });
  el.innerHTML = jobs.map(([tb, its, part]) => `<div class="pg" style="width:${D.paper - 8}mm;font-size:${D.paper >= 80 ? 15 : 13}px;${D.rail ? 'padding-top:' + (D.railMm || 15) + 'mm' : ''}"><div style="font-size:1.9em;font-weight:700;display:flex;justify-content:space-between"><span>${esc(tNameL(tb, pl))}</span>${part ? `<span style="font-size:.6em;font-weight:400">${part}</span>` : ''}</div><div>${new Date(its[0].at).toLocaleString('th-TH')} • ${esc(its[0].src === 'qr' ? TL('cust', pl) : its[0].by || '')}</div><hr>
    ${its.map(x => `<div style="margin:6px 0"><div style="font-size:1.35em;font-weight:700">${x.qty} × ${esc(trL(x.name, pl))}</div>${pl !== 'th' ? `<div>${esc(x.name)}</div>` : ''}${x.opts.length ? `<div style="font-size:1.1em">- ${x.opts.map(o => esc(trL(o, pl)) + (pl !== 'th' && trL(o, pl) !== o ? ' (' + esc(o) + ')' : '')).join('<br>- ')}</div>` : ''}${x.note ? `<div style="font-weight:700">* ${esc(noteL(x, pl))}</div>` : ''}</div>`).join('<hr style="border-style:dashed">')}${D.rail ? `<hr><div style="font-size:1.9em;font-weight:700;text-align:center">${esc(tNameL(tb, pl))}${part ? ' • ' + part : ''}</div>` : ''}</div>`).join('');
  setTimeout(() => window.print(), 50);
}
function printQueue(tb, st) { const its = itemsOf(tb).filter(x => x.status === st && (st !== 'new' || inCats(x, D.kcat ? [D.kcat] : []))); if (its.length) printTickets([[tb, its]]); }

/* ---------- โครงหน้า ---------- */
const ROLES = OWN ? {all: ['dash', 'sales']} : {all: ['tables', 'kitchen', 'serve', 'bill'], waiter: ['tables', 'serve'], kitchen: ['kitchen']}, TABI = {dash: I('chart', 22), sales: I('bill', 22), tables: I('grid', 22), kitchen: I('chef', 22), serve: I('serve', 22), bill: I('cash', 22)};
I18N.th.sales = 'รายงาน'; I18N.en.sales = 'Reports';
function draw() {
  let nNew = 0, nCk = 0; Object.keys(L).forEach(tb => itemsOf(tb).forEach(x => { if (x.status === 'new') nNew++; else if (x.status === 'cooked') nCk++; }));
  const badge = {kitchen: nNew, serve: nCk, bill: Object.keys(L).filter(tb => itemsOf(tb).length).length}, cur = ['order', 'cash'].includes(V.tab) ? 'tables' : V.tab, role = OWN ? 'all' : D.role, all = !ROLES[role] || role === 'all';
  $('#app').innerHTML = `<div class="top"><span class="brand">${esc(M.shop)}${OWN ? ' — หลังบ้าน' : ''}</span><div class="nav">${(ROLES[role] || ROLES.all).map((t, i) => `<button data-t="${t}" class="${cur === t ? 'on' : ''}" onclick="go('${t}')" title="${i + 1}"><span>${TABI[t]}</span><small><b class="tn">${i + 1}</b> ${tx(t)}</small>${badge[t] ? `<i>${badge[t]}</i>` : ''}</button>`).join('')}</div>
    <button class="ic" title="ภาษา" onclick="langSheet()" style="font-size:15px;font-weight:700;border:1px solid var(--bd);border-radius:99px;padding:6px 12px;background:#fff;white-space:nowrap;display:inline-flex;align-items:center;gap:6px">${I('globe', 16)}${LANGS[UL][0]}</button>${OWN ? '' : `<button class="ic" title="เสียง" onclick="D.voice=!D.voice;saveD();draw()">${D.voice ? I('vol', 22) : I('mute', 22)}</button>${all ? `<button class="ic" title="กะ" onclick="go('sales')">${I('bill', 22)}</button>` : ''}<button class="ic" title="${tx('log')}" onclick="showLog()">${I('bell', 22)}</button>`}<button class="ic" title="ตั้งค่า" onclick="go('set')">${I('gear', 22)}</button></div>
  ${syncErr ? '<div class="c" style="background:#fee2e2;color:#991b1b;padding:4px">' + I('alert', 16) + ' เชื่อมต่อข้อมูลกลางไม่ได้ (' + esc(syncErr) + ')</div>' : ''}
  <div class="wrap${V.tab === 'order' ? ' ord' : ''}">${({tables: vTables, order: vOrder, kitchen: () => vQueue('new'), serve: () => vQueue('cooked'), bill: vBill, cash: vCash, sales: vSales, dash: vDash, set: vSet}[V.tab])()}</div>`;
}
function go(t) { V.tab = t; if (t === 'sales' || t === 'dash') loadSales().then(draw); draw(); window.scrollTo(0, 0); }
function showLog() { modal(`<h2>${tx('log')}</h2>${V.log.map(e => `<div class="line"><div class="n">${esc(evText(e, UL))}<small class="mu th">${hm(e.at)} • ${esc(e.dev === 'cust' ? tx('cust') : e.by)}</small></div><span class="spk" onclick="speak(evText(V.log[${V.log.indexOf(e)}],vl()),vl())">${I('vol', 18)}</span></div>`).join('') || `<p class="mu">${tx('empty')}</p>`}`); }

/* ---------- 1 โต๊ะ ---------- */
const ageMin = t => Math.max(0, Math.floor((Date.now() - t) / 60000));
function tStat(tb) { const its = itemsOf(tb), o = L[tb]; if (o && o.call) return ['call', I('bell', 14) + ' ' + (o.call === 'bill' ? tx('bill') : tx('callStaff'))]; if (!its.length) return ['free', tx('free')];
  const ck = its.filter(x => x.status === 'cooked').length, nw = its.filter(x => x.status === 'new').length; return ck ? ['ready', tx('stCooked') + ' ' + ck] : nw ? ['new', tx('stNew') + ' ' + nw] : ['wait', tx('stWait')]; }
function vTables() {
  const pend = Object.keys(L).reduce((s, tb) => s + sum(itemsOf(tb)), 0);
  return `<div class="row" style="align-items:center"><b>${tx('pending')} ${baht(pend)}</b><div class="lg" style="flex:3;justify-content:flex-end"><span><i style="background:#d6cec2"></i>${tx('free')}</span><span><i style="background:var(--snew)"></i>${tx('stNew')}</span><span><i style="background:var(--sready)"></i>${tx('stCooked')}</span><span><i style="background:var(--swait)"></i>${tx('stWait')}</span><span><i style="background:var(--r)"></i>${tx('callStaff')}</span></div></div>
  <div class="grid mt" style="grid-template-columns:repeat(auto-fill,minmax(150px,1fr))">${tableIds().map(tb => { const its = itemsOf(tb), [st, lab] = tStat(tb);
    return `<div class="tbl s-${st}" onclick="tblTap('${tb}')"><div class="nm">${tb === 't0' ? I('bag', 18) + ' ' : ''}${tName(tb)}</div><div class="amt">${its.length ? baht(sum(its)) : '&nbsp;'}</div><div class="ss">${lab}${its.length ? ' • ' + ageMin(L[tb].openedAt) + ' ' + tx('min') : ''}</div></div>`; }).join('')}</div>`;
}
function tblTap(tb) {
  if (L[tb] && L[tb].call) { L[tb].call = ''; W(store.del(`live/tables/${tb}/call`)); if (!itemsOf(tb).length) delete L[tb]; }
  itemsOf(tb).length ? openCash(tb) : openOrder(tb);
}
function tblMore(tb) { const has = itemsOf(tb).length;
  modal(`<h2 class="c">${tName(tb)}</h2>${tb !== 't0' ? `<button class="big" style="background:#fff" onclick="modal();printOneQr('${tb}')">${I('qr')} ${tx('printQr')}</button>` : ''}${has ? `<button class="big" style="background:#fff" onclick="moveTable('${tb}')">${I('move')} ${tx('move')}</button><button class="big" style="background:#fff;color:var(--r)" onclick="modal();cancelTable('${tb}')">${I('lock')} ${tx('closeTb')}</button>` : ''}`); }
function printOneQr(tb) { const el = $('#print'); el.className = ''; el.innerHTML = `<div style="text-align:center;width:72mm;margin:0 auto"><h2>${esc(M.shop)}</h2>${qrSvg(custUrl(tb.slice(1)), 5)}<h1 style="margin:0">${tNameL(tb, 'th')}</h1><p>สแกนเพื่อสั่งอาหาร / Scan to order</p></div>`; setTimeout(() => window.print(), 50); }
async function tblHistory(tb) { await loadSales(); const its = itemsOf(tb), bills = SALES.filter(s => s.table === tb && dayKey(s.at) === dayKey(Date.now())).reverse();
  modal(`<h2>${tx('history')} — ${tName(tb)}</h2>${its.map(x => `<div class="line"><div class="n"><b>${x.qty}× ${esc(tr(x.name))}</b><small class="mu th">${esc(optLine(x))} • ${hm(x.at)} • ${esc(x.src === 'qr' ? tx('cust') : x.by)}</small></div><span class="st ${x.status}">${tx(stKey[x.status])}</span></div>`).join('') || `<p class="mu">${tx('empty')}</p>`}
  <h3 class="mt">${tx('paidToday')}</h3>${bills.map(s => `<div class="line" style="align-items:center"><div class="n"><b>#${s.no}</b> ${hm(s.at)} • ${esc(mLabel(s.method))}<small class="mu th">${esc(s.items.map(i => i.qty + '× ' + tr(i.name)).join(', '))}</small></div><b>${baht(s.net)}</b><button class="sm" onclick="receipt(SALES.find(s=>s.id==='${s.id}'),true)">${I('printer')}</button></div>`).join('') || `<p class="mu">${tx('empty')}</p>`}`); }
function openCash(tb) { V.table = tb; go('cash'); }
function openOrder(tb) { V.table = tb; V.cat = ''; go('order'); }

/* ---------- 2 ออเดอร์ ---------- */
function poCat(i) { V.cat = catAt(i); draw(); }
function poPick(id) { const m = M.menu.find(x => x.id === id), d = V.draft[V.table] = V.draft[V.table] || []; if (!m.opts.length) { addLine(d, {id, name: m.name, cat: m.cat, price: Number(m.price), qty: 1, opts: [], note: ''}); draw(); } else pickItem(id, line => { addLine(d, line); draw(); }); }
function drQty(i, n) { const d = V.draft[V.table]; d[i].qty += n; if (d[i].qty <= 0) d.splice(i, 1); draw(); if ($('#ocm')) d.length ? $('#ocm').innerHTML = orderCart(V.table) : modal(); }
function ensureTable(tb) { if (!L[tb]) { L[tb] = {openedAt: Date.now(), call: '', items: {}}; W(store.put(`live/tables/${tb}/openedAt`, L[tb].openedAt)); } }
function sendDraft() {
  const tb = V.table, d = V.draft[tb] || []; if (!d.length) return; const now = Date.now(); ensureTable(tb);
  d.forEach(x => { const k = 'i' + uid(), it = {...x, status: 'new', src: 'staff', by: D.name, at: now}; L[tb].items[k] = it; W(store.put(`live/tables/${tb}/items/${k}`, it)); });
  emit({type: 'order', t: tb, n: d.length, items: d.map(x => ({name: x.name, qty: x.qty, cat: x.cat}))}); V.draft[tb] = []; toast(tx('sentOk')); autoPrint(); noteWork(); draw();
}
function delItem(tb, k) { if (!confirm(tx('del'))) return; delete L[tb].items[k]; if (Object.keys(L[tb].items).length) W(store.del(`live/tables/${tb}/items/${k}`)); else { delete L[tb]; W(store.del('live/tables/' + tb)); } draw(); }
function orderCart(tb) { const d = V.draft[tb] || [], its = itemsOf(tb);
  return `<div class="row" style="align-items:center"><h3 style="flex:5">${tx('draft')}</h3>${d.length ? `<button class="sm d" style="flex:0" onclick="if(confirm(tx('clearQ'))){V.draft['${tb}']=[];modal();draw()}">${I('trash')}</button>` : ''}</div>
    ${d.length ? `${d.map((x, i) => `<div class="line" style="align-items:center">${thumb(x.id)}<div class="n"><b>${esc(tr(x.name))}</b>${sub(x.name)}<small class="mu th">${esc(optLine(x))}</small></div><div class="qty"><button onclick="drQty(${i},-1)">−</button><b>${x.qty}</b><button onclick="drQty(${i},1)">+</button></div><b style="min-width:52px;text-align:right">${baht(x.price * x.qty)}</b></div>`).join('')}
    <div class="mu mt">${d.length} ${tx('items')} • ${d.reduce((a, x) => a + x.qty, 0)} ${tx('units')}</div>
    <button class="p big" style="margin-top:6px" onclick="modal();sendDraft()">${tx('send')} ${baht(sum(d))}</button><button class="big" style="background:#fff;border:1px solid var(--bd);font-size:16px;padding:12px" onclick="modal();sendDraft();openCash('${tb}')">${tx('send')} + ${tx('pay')}</button>` : `<p class="mu">${tx('empty')}</p>`}
    ${its.length ? `<div class="mt"><b class="mu">${tx('sent')}</b></div>${its.map(x => `<div class="line"><div class="n"><b>${x.qty}× ${esc(tr(x.name))}</b><small class="mu th">${esc(optLine(x))}</small><span class="st ${x.status}">${tx(stKey[x.status])}</span>${x.src === 'qr' ? ' ' + I('phone', 14) : ''}</div><b>${baht(x.price * x.qty)}</b></div>`).join('')}
    <div class="tot"><span>${tx('total')}</span><span>${baht(sum(its))}</span></div>` : ''}`; }
function openOrderCart() { modal(`<div id="ocm">${orderCart(V.table)}</div>`); }
function vOrder() {
  const tb = V.table; if (!tb) { V.tab = 'tables'; return vTables(); }
  const d = V.draft[tb] || [], its = itemsOf(tb), n = d.reduce((a, x) => a + x.qty, 0);
  return `<div class="hd"><button onclick="${its.length ? `openCash('${tb}')` : `go('tables')`}">‹ ${tx('back')}</button><h2>${tName(tb)}</h2><button title="รูป" onclick="D.noImg=!D.noImg;saveD();draw()">${D.noImg ? I('imgOff') : I('img')}</button><button onclick="tblMore('${tb}')">⋯</button></div>
  <div class="split"><div>${menuGrid(V.cat, 'po')}</div><div class="card ocart" style="position:sticky;top:70px;max-height:calc(100vh - 84px);overflow:auto">${orderCart(tb)}</div></div>
  <div class="obar"><button class="cnt" onclick="openOrderCart()">${I('bag')} ${n ? n + ' ' + tx('units') + ' • ' + baht(sum(d)) : its.length ? tx('sent') + ' ' + baht(sum(its)) : tx('empty')}</button>${d.length ? `<button class="p" onclick="sendDraft()">${tx('send')}</button>` : its.length ? `<button class="g" onclick="openCash('${tb}')">${I('cash')} ${tx('pay')}</button>` : ''}</div>`;
}
function readItem(tb, k) { const x = L[tb].items[k], l = vl(); const nt = (x.nt || {})[l]; speak([x.qty, trL(x.name, l), ...x.opts.map(o => trL(o, l)), nt && nt !== '=' ? nt : x.note].filter(Boolean).join(' '), l); }
function moveTable(from) { modal(`<h2>${tx('move')} — ${tName(from)}</h2><div class="grid mt">${tableIds().filter(t => t !== from).map(t => `<button onclick="doMove('${from}','${t}')">${tName(t)}${itemsOf(t).length ? ' •' : ''}</button>`).join('')}</div>`); }
function doMove(from, to) { ensureTable(to); Object.entries(L[from].items).forEach(([k, x]) => { L[to].items[k] = x; W(store.put(`live/tables/${to}/items/${k}`, x)); }); delete L[from]; W(store.del('live/tables/' + from)); if (V.draft[from]) { V.draft[to] = V.draft[from]; delete V.draft[from]; } modal(); if (V.table === from) V.table = to; draw(); }

/* ---------- 3 ครัว / 4 เสิร์ฟ ---------- */
function setKcat(i) { D.kcat = i < 0 ? '' : M.cats[i]; saveD(); draw(); }
function vQueue(st) {
  const kit = st === 'new', f = x => x.status === st && (!kit || inCats(x, D.kcat ? [D.kcat] : []));
  const tks = []; Object.keys(L).forEach(tb => { let r = null, n = 0; itemsOf(tb).forEach(x => { if (!r || x.at - r.at >= 60000) { r = {tb, at: x.at, n: n++, all: []}; tks.push(r); } r.all.push(x); }); });
  tks.forEach(t => { t.its = t.all.filter(f); }); const q = tks.filter(t => t.its.length).sort((a, b) => a.at - b.at), kc = D.kcols || 0;
  const kimg = !D.kNoImg && !D.noImg;
  return `<div class="kbar">${kit ? `<div class="chips"><button class="${!D.kcat ? 'on' : ''}" onclick="setKcat(-1)">${tx('all')}</button>${M.cats.map((c, i) => `<button class="${c === D.kcat ? 'on' : ''}" onclick="setKcat(${i})">${esc(tr(c))}</button>`).join('')}</div>` : '<div></div>'}
    <div class="kctl"><div class="seg">${[0, 1, 2, 3, 4].map(n => `<button class="${kc === n ? 'on' : ''}" onclick="D.kcols=${n};saveD();draw()">${n ? n : tx('autoC')}</button>`).join('')}</div><button class="kimg ${kimg ? 'on' : ''}" onclick="D.kNoImg=${kimg};saveD();draw()">${kimg ? tx('imgOn') : tx('imgOff')}</button></div></div>` +
  (kit && q.length ? kSum(q) : '') +
  (q.length ? `<div class="kq${kimg ? '' : ' noimg'}"${kc ? ` style="grid-template-columns:repeat(${kc},minmax(0,1fr))"` : ''}>${q.map(t => { const a = ageMin(t.at), ks = t.its.map(x => x.k).join(',');
    return `<div class="card ${a >= D.t2 ? 'a2' : a >= D.t1 ? 'a1' : ''}"><div class="kh"><h2>${tName(t.tb)}${t.n ? ` <span class="kadd">${tx('more2')}</span>` : ''}</h2><span class="age">${I('timer', 16)} ${a} ${tx('min')}</span>${kit ? `<button class="sm" onclick="printTk('${t.tb}','${ks}')">${I('printer')}</button>` : ''}</div>
    <div class="mu">${hm(t.at)} • ${t.its.reduce((n, x) => n + x.qty, 0)} ${tx('items')} • ${t.its[0].src === 'qr' ? I('phone', 14) + ' ' + tx('cust') : esc(t.its[0].by)}</div>
    ${t.its.map(x => kRow(t.tb, x, kimg)).join('')}
    ${t.its.length > 1 ? `<button class="kall" onclick="advKs('${t.tb}','${ks}')">${I('check', 18)} ${tx('doneAll')} (${t.its.length})</button>` : ''}</div>`; }).join('')}</div>` : `<p class="mu c" style="padding:40px">${tx('empty')}</p>`);
}
function printTk(tb, ks) { const k = ks.split(','), its = itemsOf(tb).filter(x => k.includes(x.k)); if (its.length) printTickets([[tb, its]]); }
function advKs(tb, ks) { const k = ks.split(','), its = itemsOf(tb).filter(x => k.includes(x.k)); if (!its.length) return; const st = its[0].status; its.forEach(x => setSt(tb, x.k, nextSt(x.status))); emit({type: nextSt(st), t: tb, all: its.length > 1, items: its.map(x => ({name: x.name, qty: x.qty, cat: x.cat}))}); draw(); }
const kRow = (tb, x, im) => `<div class="ki">${im ? thumb(x.id) : ''}<div class="n"><div class="kn"><b class="kqn">${x.qty}</b><span>${esc(tr(x.name))}</span><span class="spk" onclick="readItem('${tb}','${x.k}')">${I('vol', 18)}</span></div>${sub(x.name)}${x.opts.length ? `<div class="kop">${x.opts.map(o => `<span>${esc(bi(o))}</span>`).join('')}</div>` : ''}${x.note ? `<div class="knt" title="แก้คำแปล" onclick="editNote('${tb}','${x.k}')">${I('edit', 14)} ${esc(noteS(x))}</div>` : ''}</div><button onclick="adv('${tb}','${x.k}')" aria-label="${tx('done')}">${I('check', 26)}</button></div>`;
function kSum(q) { const c = {}; q.forEach(({its}) => its.forEach(x => { c[x.name] = (c[x.name] || 0) + x.qty; })); const e = Object.entries(c).sort((a, b) => b[1] - a[1]);
  return e.length > 1 ? `<div class="ksum"><span class="mu">${tx('toMake')}</span>${e.map(([n, q]) => `<span><b>${q}</b> ${esc(tr(n))}</span>`).join('')}</div>` : ''; }
const nextSt = s => s === 'new' ? 'cooked' : 'served';
function setSt(tb, k, s) { L[tb].items[k].status = s; W(store.put(`live/tables/${tb}/items/${k}/status`, s)); }
function adv(tb, k) { const x = L[tb].items[k], n = nextSt(x.status); setSt(tb, k, n); emit({type: n, t: tb, items: [{name: x.name, qty: x.qty}]}); draw(); }
function advAll(tb, st) { const its = itemsOf(tb).filter(x => x.status === st && (st !== 'new' || inCats(x, D.kcat ? [D.kcat] : []))); its.forEach(x => setSt(tb, x.k, nextSt(st))); emit({type: nextSt(st), t: tb, all: its.length > 1, items: its.map(x => ({name: x.name, qty: x.qty, cat: x.cat}))}); draw(); }

/* ---------- 5 เช็คบิล ---------- */
function vBill() { const tbs = Object.keys(L).filter(tb => itemsOf(tb).length); return tbs.length ? `<div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(260px,1fr))">${tbs.map(tb => `<button class="big" style="margin:0;background:#fff;display:flex;justify-content:space-between" onclick="openCash('${tb}')"><span>${tName(tb)}${L[tb].call === 'bill' ? ' ' + I('bell', 16) : ''}</span><span style="color:var(--o)">${baht(sum(itemsOf(tb)))}</span></button>`).join('')}</div>` : `<p class="mu c" style="padding:40px">${tx('empty')}</p>`; }
const stKey = {new: 'stNew', cooked: 'stCooked', served: 'stServed'};
function vCash() {
  const tb = V.table, its = itemsOf(tb); if (!tb || !its.length) { V.tab = 'tables'; return vTables(); }
  return `<div class="hd"><button onclick="go('tables')">‹ ${tx('back')}</button><h2>${tName(tb)}</h2><button onclick="tblMore('${tb}')">⋯ ${tx('moreAct')}</button></div>
  <div class="acts"><button class="p" onclick="quickAdd('${tb}')">${I('plus')} ${tx('orderMore')}</button><button onclick="splitPay('${tb}')">${I('scissors')} ${tx('split')}</button><button onclick="billPreview('${tb}')">${I('bill')} ${tx('quick')}</button><button class="d" onclick="voidPick('${tb}')">${I('x')} ${tx('voidItems')}</button></div>
  <div class="card mt">${its.map((x, i) => `<div class="bl">${thumb(x.id)}<div class="n"><b>${i + 1}. ${esc(tr(x.name))}</b><span class="spk" onclick="readItem('${tb}','${x.k}')">${I('vol', 18)}</span>${x.src === 'qr' ? I('phone', 14) : ''} <span class="st ${x.status}">${tx(stKey[x.status])}</span>${sub(x.name)}<div class="ops">${x.opts.map(o => `<span>${esc(bi(o))}</span>`).join('')}${x.note ? `<span style="background:#fef08a;cursor:pointer" title="แก้คำแปล" onclick="editNote('${tb}','${x.k}')">${I('edit', 14)} ${esc(noteS(x))}</span>` : ''}</div>
    <div class="ctl"><span class="mu">${tx('qtyH')}</span> <b>${x.qty}</b> <button class="sm" onclick="editQty('${tb}','${x.k}')">${I('edit', 16)}</button><button class="sm" onclick="again('${tb}','${x.k}')">＋${tx('again')}</button><button class="sm" onclick="editPrice('${tb}','${x.k}')">${I('edit', 16)} ${tx('priceH')}</button></div></div><div class="am">${(x.price * x.qty).toLocaleString()}</div></div>`).join('')}
  <div class="tot"><span>${tx('total')} (${its.reduce((s, x) => s + x.qty, 0)})</span><span>${sum(its).toLocaleString('en-US', {minimumFractionDigits: 2})}</span></div></div>
  <button class="g big" onclick="pay('${tb}')">${I('cash')} ${tx('pay')} ${baht(sum(its))}</button>`;
}
function again(tb, k) { const x = L[tb].items[k], nk = 'i' + uid(), it = {id: x.id, name: x.name, cat: x.cat, price: x.price, qty: 1, opts: x.opts, note: x.note, status: 'new', src: 'staff', by: D.name, at: Date.now()}; L[tb].items[nk] = it; W(store.put(`live/tables/${tb}/items/${nk}`, it)); emit({type: 'order', t: tb, n: 1, items: [{name: x.name, qty: 1}]}); autoPrint(); draw(); }
function editQty(tb, k) { const x = L[tb].items[k], v = prompt(tx('qtyH') + ' — ' + tr(x.name), x.qty); if (v === null) return; const n = parseInt(v); if (!(n >= 0)) return; if (n === 0) return delItem(tb, k); x.qty = Math.min(999, n); W(store.put(`live/tables/${tb}/items/${k}/qty`, x.qty)); draw(); }
function editPrice(tb, k) { const x = L[tb].items[k], v = prompt(tx('priceH') + ' / 1 — ' + tr(x.name), x.price); if (v === null) return; const n = parseFloat(v); if (!(n >= 0)) return; x.price = n; W(store.put(`live/tables/${tb}/items/${k}/price`, n)); draw(); }
function cancelTable(tb) { if (!confirm(tx('closeQ', tName(tb)))) return; const its = itemsOf(tb); if (its.length) emit({type: 'cancel', t: tb, items: its.map(x => ({name: x.name, qty: x.qty, cat: x.cat}))}); delete L[tb]; delete V.draft[tb]; W(store.del('live/tables/' + tb)); V.table = null; go('tables'); }
/* ยกเลิกบางรายการ: เลือกจำนวนที่จะยกเลิกได้ทีละรายการ แจ้งครัวด้วยเสียง/ประวัติ */
let VD = {};
function voidPick(tb) { VD = {}; voidDraw(tb); }
function voidDraw(tb) { const its = itemsOf(tb), n = Object.values(VD).reduce((a, b) => a + b, 0);
  modal(`<h2>${tx('voidPick')} — ${tName(tb)}</h2>${its.map(x => { const v = VD[x.k] || 0; return `<div class="line" style="align-items:center;${v ? 'background:#fef2f2' : ''}">${thumb(x.id)}<div class="n"><b>${esc(tr(x.name))}</b> <span class="st ${x.status}">${tx(stKey[x.status])}</span><small class="mu th">${esc(optLine(x))}</small><span class="mu">${x.qty} × ${baht(x.price)}</span></div>
    <div class="qty" style="flex:none">${x.qty > 1 ? `<button onclick="VD['${x.k}']=Math.max(0,${v}-1);voidDraw('${tb}')">−</button><b style="min-width:22px;text-align:center;color:var(--r)">${v}</b><button onclick="VD['${x.k}']=Math.min(${x.qty},${v}+1);voidDraw('${tb}')">+</button>` : `<button style="width:auto;padding:0 12px;${v ? 'background:var(--r);color:#fff' : ''}" onclick="VD['${x.k}']=${v ? 0 : 1};voidDraw('${tb}')">${v ? I('check') : I('x')}</button>`}</div></div>`; }).join('')}
  <div class="row mt"><button onclick="modal()">${tx('back')}</button><button class="p" style="background:var(--r);border-color:var(--r)" ${n ? '' : 'disabled'} onclick="voidDo('${tb}')">${tx('voidDo', n)}</button></div>`); }
function voidDo(tb) { const its = itemsOf(tb).filter(x => VD[x.k]); if (!its.length) return;
  its.forEach(x => { const c = Math.min(x.qty, VD[x.k]); if (c >= x.qty) { delete L[tb].items[x.k]; W(store.del(`live/tables/${tb}/items/${x.k}`)); } else { L[tb].items[x.k].qty = x.qty - c; W(store.put(`live/tables/${tb}/items/${x.k}/qty`, x.qty - c)); } });
  emit({type: 'cancel', t: tb, items: its.map(x => ({name: x.name, qty: Math.min(x.qty, VD[x.k])}))});
  if (!Object.keys(L[tb].items).length) { delete L[tb]; W(store.del('live/tables/' + tb)); V.table = null; V.tab = 'tables'; } VD = {}; modal(); draw(); }
/* สั่งเพิ่มด่วน: เมนูที่ร้านเลือกไว้ (⚡) กดทีเดียวเพิ่ม 1 ไม่ต้องเลือกตัวเลือก + สั่งซ้ำของที่โต๊ะสั่งไปแล้ว (ตัวเลือกเดิม) */
let QA = {tb: '', q: {}, r: {}, edit: false};
function quickAdd(tb) { QA = {tb, q: {}, r: {}, edit: false}; qaDraw(); }
function qaDraw() { const tb = QA.tb, qm = M.menu.filter(m => m.quick && !m.out && inTime(m)), seen = {}, rep = itemsOf(tb).filter(x => { const k = x.id + '|' + x.opts.join() + '|' + x.note; if (seen[k]) return false; return seen[k] = 1; });
  const n = Object.values(QA.q).reduce((a, b) => a + b, 0) + Object.values(QA.r).reduce((a, b) => a + b, 0);
  const cell = (key, img, name, sub2, price, v) => `<div class="item qa ${v ? 'on' : ''}" onclick="${key}=(${key}||0)+1;qaDraw()">${img}<div class="tx"><b>${name}</b>${sub2}</div><div class="row" style="align-items:center;flex-wrap:nowrap"><span class="pr" style="flex:1">${price}</span>${v ? `<button class="sm" style="flex:none" onclick="event.stopPropagation();${key}=Math.max(0,${v}-1);qaDraw()">−</button><b style="flex:none;min-width:20px;text-align:center">${v}</b>` : ''}</div></div>`;
  if (QA.edit) return modal(`<h2>${I('zap', 16)} ${tx('quickEdit')}</h2><p class="mu" style="margin:4px 0 8px">เมนูที่ติ๊กจะขึ้นในปุ่ม "สั่งเพิ่ม" กดทีเดียวเพิ่ม 1 ไม่ต้องเลือกตัวเลือก</p>${M.cats.map(c => { const ms = M.menu.filter(m => m.cat === c); return ms.length ? `<h3 class="mt">${esc(c)}</h3>${ms.map(m => `<label class="ck"><input type="checkbox" ${m.quick ? 'checked' : ''} onchange="M.menu.find(x=>x.id==='${m.id}').quick=this.checked"><span>${esc(m.name)}</span><b class="mu">${baht(m.price)}</b></label>`).join('')}` : ''; }).join('')}
    <button class="p big" onclick="saveM();QA.edit=false;qaDraw()">${tx('confirm')}</button>`, true);
  modal(`<div class="row" style="align-items:center"><h2 style="flex:4">${I('plus')} ${tx('orderMore')} — ${tName(tb)}</h2><button class="sm" style="flex:none" onclick="QA.edit=true;qaDraw()">${I('zap', 16)} ${tx('quickEdit')}</button></div>
  ${rep.length ? `<h3 class="mt">${I('repeat', 16)} ${tx('repeat')}</h3><div class="grid qag">${rep.map((x, i) => cell(`QA.r['${x.k}']`, thumb(x.id), esc(tr(x.name)), `<small class="mu th">${esc(optLine(x))}</small>`, baht(x.price), QA.r[x.k] || 0)).join('')}</div>` : ''}
  <h3 class="mt">${I('zap', 16)} ${tx('quickAdd')}</h3>${qm.length ? `<div class="grid qag">${qm.map(m => cell(`QA.q['${m.id}']`, thumb(m.id), esc(tr(m.name)), '', baht(m.price), QA.q[m.id] || 0)).join('')}</div>` : `<p class="mu">ยังไม่ได้เลือกเมนูสั่งเพิ่มด่วน — กด "${I('zap', 16)} ${tx('quickEdit')}" ด้านบน</p>`}
  <div class="row mt" style="position:sticky;bottom:-18px;background:#f8f9fb;padding:10px 0"><button onclick="modal();openOrder('${tb}')">${I('book')} ${tx('allMenu')}</button><button class="p" ${n ? '' : 'disabled'} onclick="qaSend()">${tx('send')}${n ? ' (' + n + ')' : ''}</button></div>`, true);
}
function qaSend() { const tb = QA.tb, d = [];
  Object.entries(QA.r).forEach(([k, q]) => { const x = L[tb] && L[tb].items[k]; if (q && x) d.push({id: x.id, name: x.name, cat: x.cat, price: x.price, qty: q, opts: x.opts, note: x.note}); });
  Object.entries(QA.q).forEach(([id, q]) => { const m = M.menu.find(x => x.id === id); if (q && m) d.push({id, name: m.name, cat: m.cat, price: Number(m.price), qty: q, opts: [], note: ''}); });
  if (!d.length) return; V.table = tb; V.draft[tb] = [...(V.draft[tb] || []), ...d]; modal(); sendDraft(); }
function splitPay(tb) { modal(`<h2>${tx('selPay')}</h2>${itemsOf(tb).map(x => `<label class="ck"><input type="checkbox" class="spC" value="${x.k}"><span><b>${esc(tr(x.name))}</b> x ${x.qty}<small class="mu th">${esc(optLine(x))}</small></span><b>${(x.price * x.qty).toLocaleString()}</b></label>`).join('')}
  <div class="row mt"><button onclick="modal()">${tx('cancel')}</button><button class="p" onclick="const k=[...document.querySelectorAll('.spC:checked')].map(e=>e.value);if(k.length)pay('${tb}',k)">${tx('confirm')}</button></div>`); }
function billPreview(tb) { const its = itemsOf(tb), t = sum(its), pp = M.showPP !== false ? promptpay(M.promptpay, t) : ''; loadPayQr().then(() => { if ($('#bpq') && M.showPP !== false) $('#bpq').innerHTML = payQrHtml(pp, t); });
  modal(`<div class="c"><div class="mu">${tx('invoice')}</div><h2>${esc(M.shop)}</h2></div><div>${tName(tb)}<br>${new Date().toLocaleString('th-TH')}</div><hr>
  ${its.map(x => `<div class="row"><span style="flex:4">${x.qty}× ${esc(tr(x.name))}</span><b style="text-align:right">${(x.price * x.qty).toLocaleString()}</b></div>`).join('')}<hr>
  <div class="tot"><span>${tx('total')}</span><span>${t.toLocaleString('en-US', {minimumFractionDigits: 2})}</span></div><div id="bpq">${M.showPP !== false ? payQrHtml(pp, t) : ''}</div>
  <div class="row mt"><button onclick="modal()">${tx('cancel')}</button><button class="p" onclick="modal();printBill('${tb}')">${I('printer')} ${tx('print')}</button></div>`); }
function pay(tb, keys) { P = {tb, keys: keys || null, disc: 0, fee: 0, recv: '', method: 'cash'}; payDraw(); loadPayQr().then(() => { if (P && P.method === 'qr' && $('#modal').innerHTML) payDraw(); }); }
/* รูป QR รับเงินที่ร้านอัปโหลด (เช่น QR ร้านค้าของธนาคาร) — เก็บแยกจากเมนู ลูกค้าจึงไม่ต้องโหลด */
let PQR = null, PQRV = null;
async function loadPayQr() { if (!M.payQrV) { PQR = null; return; } if (PQRV === M.payQrV) return; try { PQR = await store.get('payqr'); PQRV = M.payQrV; } catch (e) {} }
function payQrHtml(pp, net) {
  const big = `<div class="c" style="font-size:30px;font-weight:700;color:#047857">${baht(net)}</div>`;
  if (!PQR && !pp) return big + `<p class="c mu" style="padding:16px">ยังไม่มี QR รับเงิน — ใส่รูป QR หรือเบอร์พร้อมเพย์ได้ที่ ตั้งค่า › ข้อมูลร้าน</p>`;
  return big + (PQR ? `<img class="pqr" src="${PQR}" alt="QR">${M.payQrName ? `<p class="c" style="margin:2px 0;font-weight:600">${esc(M.payQrName)}</p>` : ''}` : '') + (pp ? `<div class="c" style="max-width:260px;margin:${PQR ? '14px' : '0'} auto 0">${qrSvg(pp)}</div><p class="c mu">PromptPay ${esc(M.promptpay)} • ${baht(net)}</p>` : '');
}
const payItems = () => itemsOf(P.tb).filter(x => !P.keys || P.keys.includes(x.k));
const payNet = () => Math.max(0, sum(payItems()) - P.disc + P.fee);
const mLabel = m => m === 'cash' ? tx('cash') : m === 'qr' ? tx('qr') : m;
function payDraw() {
  const total = sum(payItems()), net = payNet(), pp = promptpay(M.promptpay, net), ms = ['cash', 'qr', ...M.channels];
  const kb = (k, l, st) => `<button style="${st || ''}" onclick="payKey('${k}')">${l || k}</button>`;
  modal(`<h2>${tx('pay')} — ${tName(P.tb)}${P.keys ? ' (' + tx('split') + ')' : ''}</h2><div class="pay mt"><div>
    <div class="tot" style="font-size:17px"><span>${tx('total')}</span><span>${baht(total)}</span></div>
    <div class="row" style="align-items:center"><span>${tx('disc')}</span><input type="number" inputmode="decimal" min="0" value="${P.disc || ''}" onchange="P.disc=Math.max(0,+this.value||0);payDraw()"></div>
    <div class="row mt" style="align-items:center"><span>${tx('fee')}</span><input type="number" inputmode="decimal" min="0" value="${P.fee || ''}" onchange="P.fee=Math.max(0,+this.value||0);payDraw()"></div>
    <div class="tot" style="color:#047857;font-size:24px"><span>${tx('net')}</span><span>${baht(net)}</span></div><div id="chg" style="font-size:20px;font-weight:700;text-align:right;min-height:30px"></div>
    <button class="g big" id="payOk" onclick="payDone(false)">${tx('confirm')}</button><button class="big" id="payOk2" style="background:#d1fae5" onclick="payDone(true)">${I('printer')} ${tx('confirmPrint')}</button><button class="big" style="background:#fff" onclick="modal()">${tx('cancel')}</button></div>
  <div><div class="chips pm">${ms.map((m, i) => `<button class="${P.method === m ? 'on' : ''}" onclick="P.method=['cash','qr',...M.channels][${i}];payDraw()">${esc(mLabel(m))}</button>`).join('')}</div>
    ${P.method === 'cash' ? `<div id="pRecv" style="font-size:38px;font-weight:700;padding:4px 8px"></div><div class="pad">
      <button style="grid-column:span 2;background:#fde047" onclick="payKey('C')">${tx('clear')}</button>${kb('<', '⌫', 'background:#e5e7eb')}${kb('+1000', '1,000', 'background:#d1d5db')}
      ${kb('7')}${kb('8')}${kb('9')}${kb('+500', '500', 'background:#e9d5ff')}${kb('4')}${kb('5')}${kb('6')}${kb('+100', '100', 'background:#fca5a5')}
      ${kb('1')}${kb('2')}${kb('3')}${kb('+50', '50', 'background:#bfdbfe')}${kb('0')}${kb('.')}${kb('=', tx('exact'), 'background:#34d399;font-size:15px;font-weight:700')}${kb('+20', '20', 'background:#bbf7d0')}</div>`
    : P.method === 'qr' ? payQrHtml(pp, net) : `<p class="c mu" style="padding:30px 0;font-size:20px">${esc(mLabel(P.method))} • ${baht(net)}</p>`}</div></div>`, true);
  payUpd();
}
function payKey(k) { if (k === 'C') P.recv = ''; else if (k === '<') P.recv = P.recv.slice(0, -1); else if (k === '=') P.recv = String(payNet()); else if (k[0] === '+') P.recv = String((+P.recv || 0) + +k.slice(1)); else if (!(k === '.' && P.recv.includes('.')) && P.recv.length < 9) P.recv += k; payUpd(); }
function payUpd() { const net = payNet(), r = +P.recv || 0, cash = P.method === 'cash', ok = !cash || r >= net;
  if (cash) { $('#pRecv').textContent = (P.recv === '' ? '0' : (+P.recv).toLocaleString('en-US') + (P.recv.endsWith('.') ? '.' : '')); $('#chg').textContent = ok ? tx('change') + ' ' + baht(r - net) : tx('short') + ' ' + baht(net - r); $('#chg').style.color = ok ? '#047857' : '#ea580c'; }
  $('#payOk').disabled = $('#payOk2').disabled = !ok; }
function payDone(pr) {
  const tb = P.tb, its = payItems(), total = sum(its), net = payNet(), now = Date.now(), cash = P.method === 'cash';
  const s = {id: 's' + uid(), no: SALES.filter(x => dayKey(x.at) === dayKey(now)).length + 1, at: now, table: tb, by: D.name, items: its.map(({name, cat, price, qty, opts, note}) => ({name, cat, price, qty, opts, note})), total, disc: P.disc, fee: P.fee, net, method: P.method, recv: cash ? +P.recv : net};
  SALES.push(s); W(store.put('sales/' + s.id, JSON.stringify(s)));
  if (its.length === itemsOf(tb).length) { delete L[tb]; delete V.draft[tb]; W(store.del('live/tables/' + tb)); }
  else its.forEach(x => { delete L[tb].items[x.k]; W(store.del(`live/tables/${tb}/items/${x.k}`)); });
  emit({type: 'paid', t: tb, method: cash ? 'cash' : 'other', net, recv: s.recv, chg: s.recv - net}); modal(); if (pr) receipt(s, true);
  if (cash) toast(tx('change') + ' ' + baht(s.recv - net)); if (!L[tb]) { if (V.table === tb) V.table = null; V.tab = 'tables'; } draw();
}
function receipt(s, paid, here) {
  if (D.rprint && !here) return sendPJob({k: 'rc', s, paid});
  const el = $('#print'); el.className = 'rc', ol = x => [...(x.opts || []), x.note].filter(Boolean).join(', ');
  el.innerHTML = `<div style="text-align:center">${M.logo ? `<img src="${M.logo}" style="width:22mm"><br>` : ''}<b style="font-size:16px">${esc(M.shop)}</b><br>${M.addr ? esc(M.addr) + '<br>' : ''}${M.tel ? 'โทร ' + esc(M.tel) + '<br>' : ''}${M.tax ? 'เลขผู้เสียภาษี ' + esc(M.tax) + '<br>' : ''}${paid ? 'ใบเสร็จรับเงิน #' + s.no : 'ใบแจ้งรายการ'}<br>${tNameL(s.table, 'th')} • ${new Date(s.at).toLocaleString('th-TH')}</div><hr>
  <table style="width:100%;border-collapse:collapse">${s.items.map(x => `<tr><td style="vertical-align:top">${x.qty}×</td><td>${esc(x.name)}${ol(x) ? '<br><small>' + esc(ol(x)) + '</small>' : ''}</td><td style="text-align:right;vertical-align:top">${(x.price * x.qty).toLocaleString()}</td></tr>`).join('')}</table><hr>
  <table style="width:100%"><tr><td>รวม</td><td style="text-align:right">${s.total.toLocaleString()}</td></tr>${s.disc ? `<tr><td>ส่วนลด</td><td style="text-align:right">-${s.disc.toLocaleString()}</td></tr>` : ''}${s.fee ? `<tr><td>ค่าบริการเพิ่ม</td><td style="text-align:right">${s.fee.toLocaleString()}</td></tr>` : ''}<tr><td><b>สุทธิ</b></td><td style="text-align:right"><b>${s.net.toLocaleString()}</b></td></tr>
  ${paid ? `<tr><td>${s.method === 'cash' ? 'เงินสด' : s.method === 'qr' ? 'โอน/QR' : esc(s.method)}</td><td style="text-align:right">${s.recv.toLocaleString()}</td></tr>${s.method === 'cash' ? `<tr><td>ทอน</td><td style="text-align:right">${(s.recv - s.net).toLocaleString()}</td></tr>` : ''}` : ''}</table>
  ${!paid && M.showPP !== false && promptpay(M.promptpay, s.net) ? `<div style="width:45mm;margin:6px auto">${qrSvg(promptpay(M.promptpay, s.net))}</div><div style="text-align:center">สแกนจ่ายพร้อมเพย์</div>` : ''}<p style="text-align:center">${esc(M.footer)}</p>`;
  setTimeout(() => window.print(), 50);
}
function printBill(tb) { const its = itemsOf(tb), t = sum(its); receipt({at: Date.now(), table: tb, items: its, total: t, disc: 0, net: t}, false); }

/* ---------- รายงาน / กะ / ภาพรวมเจ้าของ ---------- */
let SHIFT = null, SHIFTS = [];
const R = {tab: OWN ? 'rep' : 'shift', from: dayKey(Date.now()), to: dayKey(Date.now())};
const pj = x => { try { return JSON.parse(x); } catch (e) { return null; } };
/* เครื่องหน้าร้านโหลดเฉพาะบิลของกะปัจจุบัน (หรือของวันนี้) — ประวัติทั้งหมดดูได้ที่หน้าเจ้าของเท่านั้น */
async function loadSales() { try {
  if (OWN) { SALES = Object.values(await store.get('sales') || {}).map(pj).filter(Boolean).sort((a, b) => a.at - b.at); SHIFTS = Object.values(await store.get('shifts') || {}).map(pj).filter(Boolean).sort((a, b) => a.openedAt - b.openedAt); return; }
  const from = Math.min(SHIFT ? SHIFT.openedAt : Infinity, new Date().setHours(0, 0, 0, 0)), k = 's' + from.toString(36).padStart(9, '0'), o = await store.since('sales', k) || {};
  SALES = Object.keys(o).filter(x => x >= k).map(x => pj(o[x])).filter(Boolean).sort((a, b) => a.at - b.at);
} catch (e) {} }
const mTh = m => m === 'cash' ? 'เงินสด' : m === 'qr' ? 'โอน/QR' : m;
const catOf = i => i.cat || (M.menu.find(m => m.name === i.name) || {}).cat || 'อื่น ๆ';
const num = n => (Math.round(n * 100) / 100).toLocaleString('en-US');
function summarize(list) { const r = {n: list.length, total: 0, disc: 0, fee: 0, net: 0, units: 0, by: {}, cat: {}, item: {}, hour: {}, table: {}, opt: {}, staff: {}};
  list.forEach(s => { r.total += s.total; r.disc += s.disc || 0; r.fee += s.fee || 0; r.net += s.net; r.by[s.method] = (r.by[s.method] || 0) + s.net; const h = new Date(s.at).getHours(); r.hour[h] = (r.hour[h] || 0) + s.net; (r.table[s.table] = r.table[s.table] || {q: 0, a: 0}).q++; r.table[s.table].a += s.net; (r.staff[s.by || '-'] = r.staff[s.by || '-'] || {q: 0, a: 0}).q++; r.staff[s.by || '-'].a += s.net;
    s.items.forEach(i => { const a = i.price * i.qty, c = catOf(i); r.units += i.qty; (i.opts || []).forEach(o => { const rx = /^(.*) x(\d+)$/.exec(o), k = rx ? rx[1] : o; r.opt[k] = (r.opt[k] || 0) + i.qty * (rx ? +rx[2] : 1); }); (r.cat[c] = r.cat[c] || {q: 0, a: 0}).q += i.qty; r.cat[c].a += a; (r.item[i.name] = r.item[i.name] || {q: 0, a: 0, c}).q += i.qty; r.item[i.name].a += a; }); });
  return r; }
function sumHtml(r) { const rows = (o, f) => Object.entries(o).sort((a, b) => f(b[1]) - f(a[1]));
  return `<div class="grid mt"><div class="stat">ยอดขายสุทธิ<b>${baht(r.net)}</b></div><div class="stat">จำนวนบิล<b>${r.n}</b></div><div class="stat">เฉลี่ยต่อบิล<b>${baht(r.n ? r.net / r.n : 0)}</b></div><div class="stat">จำนวนจาน/ชิ้น<b>${r.units}</b></div><div class="stat">ส่วนลด<b>${baht(r.disc)}</b></div><div class="stat">ค่าบริการเพิ่ม<b>${baht(r.fee)}</b></div></div>
  ${(() => { const hs = Object.keys(r.hour || {}).map(Number); if (!hs.length) return ''; const mx = Math.max(...Object.values(r.hour)), a = Math.min(...hs), b = Math.max(...hs), out = []; for (let h = a; h <= b; h++) { const v = r.hour[h] || 0; out.push(`<tr><td style="white-space:nowrap">${String(h).padStart(2, '0')}:00</td><td style="width:100%"><div style="height:18px;border-radius:4px;background:var(--o);width:${v ? Math.max(1, v / mx * 100) : 0}%"></div></td><td class="r"><b>${num(v)}</b></td></tr>`); } return `<div class="card mt"><h3>${I('clock')} ยอดขายรายชั่วโมง</h3><table class="t">${out.join('')}</table></div>`; })()}
  <div class="grid mt" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr));align-items:start">
  <div class="card"><h3>${I('card')} การจ่าย</h3><table class="t">${rows(r.by, v => v).map(([m, v]) => `<tr><td>${esc(mTh(m))}</td><td class="r"><b>${num(v)}</b></td></tr>`).join('') || '<tr><td class="mu">—</td></tr>'}</table></div>
  <div class="card"><h3>${I('folder')} หมวดหมู่</h3><table class="t">${rows(r.cat, v => v.a).map(([c, v]) => `<tr><td>${esc(c)}</td><td class="r">${v.q}</td><td class="r"><b>${num(v.a)}</b></td></tr>`).join('') || '<tr><td class="mu">—</td></tr>'}</table></div>
  <div class="card"><h3>${I('grid')} โต๊ะ</h3><table class="t">${rows(r.table || {}, v => v.a).map(([t, v]) => `<tr><td>${tNameL(t, 'th')}</td><td class="r">${v.q} บิล</td><td class="r"><b>${num(v.a)}</b></td></tr>`).join('') || '<tr><td class="mu">—</td></tr>'}</table></div>
  <div class="card"><h3>${I('user')} พนักงานที่ปิดบิล</h3><table class="t">${rows(r.staff || {}, v => v.a).map(([t, v]) => `<tr><td>${esc(t)}</td><td class="r">${v.q} บิล</td><td class="r"><b>${num(v.a)}</b></td></tr>`).join('') || '<tr><td class="mu">—</td></tr>'}</table></div>
  <div class="card"><h3>${I('sliders')} ตัวเลือก</h3><table class="t">${rows(r.opt || {}, v => v).slice(0, 40).map(([t, v]) => `<tr><td>${esc(t)}</td><td class="r"><b>${v}</b></td></tr>`).join('') || '<tr><td class="mu">—</td></tr>'}</table></div>
  <div class="card"><h3>${I('bowl')} รายการ</h3><table class="t">${rows(r.item, v => v.q).map(([n, v]) => `<tr><td>${esc(n)}</td><td class="r">${v.q}</td><td class="r"><b>${num(v.a)}</b></td></tr>`).join('') || '<tr><td class="mu">—</td></tr>'}</table></div></div>`; }
const shiftSales = sh => SALES.filter(s => s.at >= sh.openedAt && (!sh.closedAt || s.at < sh.closedAt));
function drawer(sh, r) { const ci = sh.moves.filter(m => m.type === 'in').reduce((a, m) => a + m.amt, 0), co = sh.moves.filter(m => m.type === 'out').reduce((a, m) => a + m.amt, 0), cs = r.by.cash || 0; return {ci, co, cs, exp: sh.float + cs + ci - co}; }
function saveShift() { W(SHIFT ? store.put('live/shift', JSON.stringify(SHIFT)) : store.del('live/shift')); }
function vSales() {
  if (!OWN) return `<h2>${I('timer')} กะปัจจุบัน</h2><p class="mu">รายงานย้อนหลังและประวัติปิดกะดูได้ที่หน้าเจ้าของร้าน</p>` + rShift();
  return `<div class="chips">${[['rep', I('trend', 16) + ' รายงานยอดขาย'], ['hist', I('archive', 16) + ' ประวัติปิดกะ'], ['shift', I('timer', 16) + ' กะปัจจุบัน']].map(t => `<button class="${R.tab === t[0] ? 'on' : ''}" onclick="R.tab='${t[0]}';draw()">${t[1]}</button>`).join('')}</div>` + ({shift: rShift, rep: rRep, hist: rHist}[R.tab])();
}
function rShift() {
  if (!SHIFT) return `<div class="card" style="max-width:460px"><h3>ยังไม่ได้เปิดกะ</h3><label>เงินทอนตั้งต้นในลิ้นชัก (บาท)</label><input id="shF" type="number" inputmode="decimal" placeholder="เช่น 1000"><button class="p big" onclick="openShift()">เปิดกะ</button></div>`;
  const r = summarize(shiftSales(SHIFT)), d = drawer(SHIFT, r);
  return `<div class="split"><div class="card"><h3>กะนี้เปิด ${new Date(SHIFT.openedAt).toLocaleString('th-TH')} โดย ${esc(SHIFT.by)}</h3>
    <table class="t mt"><tr><td>เงินทอนตั้งต้น</td><td class="r">${num(SHIFT.float)}</td></tr><tr><td>+ ขายเงินสด</td><td class="r">${num(d.cs)}</td></tr><tr><td>+ เงินเข้า</td><td class="r">${num(d.ci)}</td></tr><tr><td>− เงินออก</td><td class="r">${num(d.co)}</td></tr><tr style="font-weight:700;font-size:18px"><td>เงินสดที่ควรมีในลิ้นชัก</td><td class="r">${baht(d.exp)}</td></tr></table>
    <div class="row mt"><button onclick="cashMove('in')">＋ เงินเข้า</button><button onclick="cashMove('out')">－ เงินออก</button><button onclick="printShift({...SHIFT,sum:summarize(shiftSales(SHIFT))})">${I('printer')} พิมพ์ยอด</button></div><button class="p big" onclick="closeShift()">ปิดกะ / นับเงิน</button></div>
  <div class="card"><h3>เงินเข้า–ออกระหว่างกะ</h3>${SHIFT.moves.map(m => `<div class="line"><div class="n"><b>${m.type === 'in' ? 'เงินเข้า' : 'เงินออก'}</b> ${esc(m.note)}<small class="mu th">${hm(m.at)} • ${esc(m.by)}</small></div><b style="color:${m.type === 'in' ? 'var(--g)' : 'var(--r)'}">${m.type === 'in' ? '+' : '−'}${num(m.amt)}</b></div>`).join('') || '<p class="mu">ยังไม่มีรายการ</p>'}</div></div>` + sumHtml(r);
}
function openShift() { SHIFT = {id: 'h' + uid(), openedAt: Date.now(), by: D.name, float: Math.max(0, +$('#shF').value || 0), moves: []}; saveShift(); draw(); }
function cashMove(type) { modal(`<h2>${type === 'in' ? '＋ เงินเข้าลิ้นชัก' : '－ เงินออกจากลิ้นชัก'}</h2><label>จำนวนเงิน</label><input id="mvA" type="number" inputmode="decimal"><label>หมายเหตุ (เช่น ซื้อน้ำแข็ง, แลกเหรียญ, เจ้าของเบิก)</label><input id="mvN"><div class="row mt"><button onclick="modal()">ยกเลิก</button><button class="p" onclick="const a=+$('#mvA').value;if(a>0){SHIFT.moves.push({at:Date.now(),type:'${type}',amt:a,note:$('#mvN').value.trim(),by:D.name});saveShift();modal();draw()}">บันทึก</button></div>`); }
function closeShift() { const r = summarize(shiftSales(SHIFT)), d = drawer(SHIFT, r), open = Object.keys(L).filter(tb => itemsOf(tb).length).length;
  modal(`<h2>ปิดกะ</h2>${open ? `<p style="color:var(--r)">${I('alert', 16)} ยังมี ${open} โต๊ะที่ยังไม่ได้ชำระ</p>` : ''}<div class="tot"><span>เงินสดที่ควรมี</span><span>${baht(d.exp)}</span></div><label>เงินสดที่นับได้จริง</label><input id="clC" type="number" inputmode="decimal" oninput="const v=(+this.value||0)-${d.exp};$('#clD').textContent=(v===0?'พอดี':v>0?'เกิน '+num(v):'ขาด '+num(-v));$('#clD').style.color=v<0?'var(--r)':'var(--g)'"><div id="clD" class="tot"></div><label>หมายเหตุ</label><input id="clN">
  <div class="row mt"><button onclick="modal()">ยกเลิก</button><button class="p" onclick="doClose(false)">ปิดกะ</button><button class="p" onclick="doClose(true)">ปิดกะ + พิมพ์</button></div>`); }
function doClose(pr) { const r = summarize(shiftSales(SHIFT)), d = drawer(SHIFT, r), sh = {...SHIFT, closedAt: Date.now(), closedBy: D.name, counted: +$('#clC').value || 0, expected: d.exp, note: $('#clN').value.trim(), sum: r};
  W(store.put('shifts/' + sh.id, JSON.stringify(sh))); SHIFTS.push(sh); SHIFT = null; saveShift(); modal(); if (pr) printShift(sh); if (OWN) R.tab = 'hist'; draw(); showShift(sh.id); }
function shiftText(sh) { const r = sh.sum, d = drawer(sh, r), row = (a, b) => `<tr><td>${a}</td><td style="text-align:right">${b}</td></tr>`;
  return `<table style="width:100%">${row('เปิดกะ', new Date(sh.openedAt).toLocaleString('th-TH') + ' ' + esc(sh.by))}${sh.closedAt ? row('ปิดกะ', new Date(sh.closedAt).toLocaleString('th-TH') + ' ' + esc(sh.closedBy)) : ''}${row('จำนวนบิล', r.n)}${row('ยอดขายสุทธิ', '<b>' + num(r.net) + '</b>')}${row('ส่วนลด', num(r.disc))}</table><hr><b>การจ่าย</b><table style="width:100%">${Object.entries(r.by).map(([m, v]) => row(esc(mTh(m)), num(v))).join('')}</table><hr><b>ลิ้นชักเงินสด</b><table style="width:100%">${row('เงินทอนตั้งต้น', num(sh.float))}${row('ขายเงินสด', num(d.cs))}${row('เงินเข้า', num(d.ci))}${row('เงินออก', num(d.co))}${row('ควรมี', '<b>' + num(d.exp) + '</b>')}${sh.closedAt ? row('นับได้', num(sh.counted)) + row('ส่วนต่าง', '<b>' + (sh.counted - d.exp > 0 ? '+' : '') + num(sh.counted - d.exp) + '</b>') : ''}</table>${sh.moves.length ? '<hr><b>เงินเข้า–ออก</b><table style="width:100%">' + sh.moves.map(m => row((m.type === 'in' ? '+ ' : '− ') + esc(m.note || ''), num(m.amt))).join('') + '</table>' : ''}<hr><b>หมวดหมู่</b><table style="width:100%">${Object.entries(r.cat).map(([c, v]) => row(esc(c) + ' ×' + v.q, num(v.a))).join('')}</table><hr><b>รายการ</b><table style="width:100%">${Object.entries(r.item).sort((a, b) => b[1].q - a[1].q).map(([n, v]) => row(esc(n) + ' ×' + v.q, num(v.a))).join('')}</table>${sh.note ? '<hr>หมายเหตุ: ' + esc(sh.note) : ''}`; }
function printShift(sh) { const el = $('#print'); el.className = 'rc'; el.innerHTML = `<div style="text-align:center"><b style="font-size:16px">${esc(M.shop)}</b><br>${sh.closedAt ? 'สรุปปิดกะ' : 'ยอดระหว่างกะ'}</div><hr>` + shiftText(sh); setTimeout(() => window.print(), 50); }
function showShift(id) { const sh = SHIFTS.find(x => x.id === id); modal(`<h2>สรุปปิดกะ</h2>${shiftText(sh)}<div class="row mt"><button onclick="modal()">ปิด</button><button class="p" onclick="printShift(SHIFTS.find(x=>x.id==='${id}'))">${I('printer')} พิมพ์</button></div>`); }
function rHist() { return `<div class="card" style="overflow-x:auto"><table class="t"><tr><th>เปิด</th><th>ปิด</th><th>พนักงาน</th><th class="r">ยอดขาย</th><th class="r">เงินสดควรมี</th><th class="r">นับได้</th><th class="r">ส่วนต่าง</th></tr>${SHIFTS.slice().reverse().map(sh => { const df = sh.counted - sh.expected; return `<tr onclick="showShift('${sh.id}')" style="cursor:pointer"><td>${new Date(sh.openedAt).toLocaleString('th-TH', {dateStyle: 'short', timeStyle: 'short'})}</td><td>${hm(sh.closedAt)}</td><td>${esc(sh.closedBy)}</td><td class="r">${num(sh.sum.net)}</td><td class="r">${num(sh.expected)}</td><td class="r">${num(sh.counted)}</td><td class="r" style="font-weight:700;color:${df < 0 ? 'var(--r)' : 'var(--g)'}">${df > 0 ? '+' : ''}${num(df)}</td></tr>`; }).join('') || '<tr><td colspan="7" class="mu">ยังไม่มีกะที่ปิดแล้ว</td></tr>'}</table></div>`; }
function setRange(n) { const now = new Date(); R.to = dayKey(now); R.from = n === 'm' ? dayKey(new Date(now.getFullYear(), now.getMonth(), 1)) : dayKey(now - (n - 1) * 86400000); draw(); }
const repList = () => SALES.filter(s => dayKey(s.at) >= R.from && dayKey(s.at) <= R.to);
function rRep() { const list = repList(), days = {}; list.forEach(s => { const k = dayKey(s.at); (days[k] = days[k] || {n: 0, a: 0}).n++; days[k].a += s.net; });
  return `<div class="row" style="align-items:center"><input type="date" value="${R.from}" onchange="R.from=this.value;draw()"><input type="date" value="${R.to}" onchange="R.to=this.value;draw()"><button onclick="setRange(1)">วันนี้</button><button onclick="setRange(7)">7 วัน</button><button onclick="setRange('m')">เดือนนี้</button><button onclick="csv()">${I('down', 16)} CSV</button></div>` + sumHtml(summarize(list)) +
  (Object.keys(days).length > 1 ? `<div class="card mt"><h3>${I('cal')} รายวัน</h3><table class="t"><tr><th>วันที่</th><th class="r">บิล</th><th class="r">ยอดขาย</th></tr>${Object.keys(days).sort().map(k => `<tr><td>${k}</td><td class="r">${days[k].n}</td><td class="r"><b>${num(days[k].a)}</b></td></tr>`).join('')}</table></div>` : '') +
  `<div class="card mt" style="overflow-x:auto"><h3>${I('bill')} บิล</h3><table class="t"><tr><th>#</th><th>เวลา</th><th>โต๊ะ</th><th>โดย</th><th>จ่าย</th><th class="r">สุทธิ</th><th></th></tr>${list.slice().reverse().slice(0, 300).map(s => `<tr><td>${s.no}</td><td>${dayKey(s.at).slice(5)} ${hm(s.at)}</td><td>${tNameL(s.table, 'th')}</td><td>${esc(s.by || '')}</td><td>${esc(mTh(s.method))}</td><td class="r">${num(s.net)}</td><td class="r" style="white-space:nowrap"><button class="sm" onclick="receipt(SALES.find(s=>s.id==='${s.id}'),true)">${I('printer')}</button> <button class="sm d" onclick="voidBill('${s.id}')">${I('x', 16)}</button></td></tr>`).join('') || '<tr><td colspan="7" class="mu">ยังไม่มีบิล</td></tr>'}</table></div>`; }
function voidBill(id) { if (confirm('ลบบิลนี้ออกจากยอดขาย?')) { SALES = SALES.filter(s => s.id !== id); W(store.del('sales/' + id)); draw(); } }
function csv() {
  const rows = [['บิล', 'วันที่', 'เวลา', 'โต๊ะ', 'พนักงาน', 'หมวด', 'รายการ', 'ตัวเลือก', 'จำนวน', 'ราคา', 'รวม', 'ส่วนลดบิล', 'สุทธิบิล', 'ชำระ']];
  repList().forEach(s => s.items.forEach(i => rows.push([s.no, dayKey(s.at), hm(s.at), tNameL(s.table, 'th'), s.by || '', catOf(i), i.name, [...(i.opts || []), i.note].filter(Boolean).join(' '), i.qty, i.price, i.price * i.qty, s.disc, s.net, mTh(s.method)])));
  dl('sales-' + R.from + '_' + R.to + '.csv', '﻿' + rows.map(r => r.map(c => '"' + String(c).replace(/"/g, '""') + '"').join(',')).join('\n'), 'text/csv');
}
function vDash() { const today = SALES.filter(s => dayKey(s.at) === dayKey(Date.now())), r = summarize(today), open = Object.keys(L).filter(tb => itemsOf(tb).length); let nw = 0, ck = 0; open.forEach(tb => itemsOf(tb).forEach(x => { if (x.status === 'new') nw++; else if (x.status === 'cooked') ck++; }));
  return `<h2>${I('chart')} วันนี้ ${new Date().toLocaleDateString('th-TH', {dateStyle: 'long'})}</h2><div class="grid mt"><div class="stat">โต๊ะที่เปิดอยู่<b>${open.length}</b></div><div class="stat">ยอดรอชำระ<b>${baht(open.reduce((a, tb) => a + sum(itemsOf(tb)), 0))}</b></div><div class="stat">รอครัวทำ<b>${nw}</b></div><div class="stat">รอเสิร์ฟ<b>${ck}</b></div><div class="stat">กะ<b style="font-size:16px">${SHIFT ? 'เปิด ' + hm(SHIFT.openedAt) + ' • ' + esc(SHIFT.by) : 'ยังไม่เปิดกะ'}</b></div></div>
  ${open.length ? `<div class="card mt"><h3>โต๊ะที่เปิดอยู่</h3><table class="t">${open.map(tb => `<tr><td><b>${tName(tb)}</b></td><td>${tStat(tb)[1]}</td><td>${ageMin(L[tb].openedAt)} นาที</td><td class="r"><b>${num(sum(itemsOf(tb)))}</b></td></tr>`).join('')}</table></div>` : ''}` + sumHtml(r) + `<button class="big" style="background:#fff;border:1px solid var(--bd);font-size:16px" onclick="go('sales')">ดูรายงานทั้งหมด ›</button>`; }
function dl(name, text, type) { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], {type})); a.download = name; a.click(); }

/* ---------- ตั้งค่า ---------- */
const langOpts = (list, cur, blank) => (blank ? `<option value="">${blank}</option>` : '') + list.map(l => `<option value="${l}" ${l === cur ? 'selected' : ''}>${LANGS[l][0]}</option>`).join('');
const langChecks = (key) => Object.keys(LANGS).map(l => `<label class="ck" style="display:inline-flex;border:0;margin-right:12px"><input type="checkbox" ${M[key].includes(l) ? 'checked' : ''} ${l === 'th' ? 'disabled' : ''} onchange="togLang('${key}','${l}',this.checked)"><span>${LANGS[l][0]}</span></label>`).join('');
function togLang(key, l, on) { M[key] = Object.keys(LANGS).filter(x => x === l ? on : M[key].includes(x)); if (!M.clangs.includes(M.cdef)) M.cdef = 'th'; saveM(); draw(); if ($('#modal').innerHTML) langSheet(); }
function langSheet() {
  const btn = (l, on, fn) => `<button style="margin:0 6px 6px 0;font-weight:700;${on ? 'background:var(--o);color:#fff;border-color:var(--o)' : ''}" onclick="${fn}">${on ? I('check', 16) + ' ' : ''}${LANGS[l][0]}</button>`;
  modal(`<h2>${I('globe')} ภาษา</h2>
  ${OWN ? `<div class="card mt"><h3>${I('chef')} ภาษาที่พนักงานเลือกใช้ได้</h3>${langChecks('slangs')}</div>` : `<div class="card mt"><h3>${I('chef')} ภาษาของเครื่องนี้</h3><p class="mu" style="margin:4px 0 10px">เปลี่ยนเฉพาะเครื่องนี้ เครื่องอื่นตั้งของตัวเองได้</p>${M.slangs.map(l => btn(l, l === D.lang, `setD('lang','${l}');langSheet()`)).join('')}
    </div>`}
  ${!OWN ? '' : `<div class="card mt"><h3>${I('user')} หน้าบ้าน — ภาษาที่ลูกค้าเห็น</h3><p class="mu" style="margin:4px 0 10px">ภาษาแรกที่ลูกค้าเห็นเมื่อสแกน QR</p>${M.clangs.map(l => btn(l, l === M.cdef, `M.cdef='${l}';saveM();langSheet()`)).join('')}
    <label>ภาษาที่ลูกค้ากดเปลี่ยนเองได้</label>${langChecks('clangs')}
    <p class="mu" style="font-size:14px">ภาษาหลังบ้านที่ไม่ได้ติ๊กตรงนี้ ลูกค้าจะไม่เห็น</p></div>
  <button class="big" style="background:#fff;border:1px solid var(--bd);font-size:16px" onclick="modal();V.set='trl';go('set')">${I('edit', 16)} แก้คำแปลชื่อเมนูแต่ละภาษา</button>`}`);
}
function setD(k, v) { D[k] = v; saveD(); if (k === 'lang') { UL = LANGS[D.lang] ? D.lang : 'th'; document.documentElement.lang = UL; } draw(); }
function setSay(k, v) { D.say[k] = v ? 1 : 0; saveD(); }
function togPcat(i, on) { const c = M.cats[i]; D.pcats = M.cats.filter(x => x === c ? on : D.pcats.includes(x)); saveD(); }
function vSet() {
  const tiles = [['menu', I('bowl', 28), 'จัดการเมนูอาหาร', 'เมนู หมวด ตัวเลือก รูป'], ['out', I('ban', 28), 'สินค้า / ตัวเลือก หมด', 'ปิด–เปิดขายแบบเร็ว'], ['dev', I('printer', 28), 'เครื่องนี้และเครื่องปริ้น', 'ภาษา เสียง ใบครัว หน้าที่ของเครื่อง'], ['shop', I('store', 28), 'โปรไฟล์ร้าน', 'ชื่อ ที่อยู่ โลโก้ โต๊ะ พร้อมเพย์ PIN'], ['qr', I('qr', 28), 'QR โต๊ะและบริการลูกค้า', 'พิมพ์ QR เปิด–ปิดการสแกนสั่ง'], ['trl', I('globe', 28), 'แปลภาษา', 'ชื่อเมนูและคำในหมายเหตุ'], ['data', I('db', 28), 'ข้อมูล', 'สำรอง กู้คืน โหลดเมนูตั้งต้น']];
  const allow = OWN ? ['menu', 'out', 'shop', 'qr', 'trl', 'data'] : ['out', 'dev']; for (let i = tiles.length - 1; i >= 0; i--) if (!allow.includes(tiles[i][0])) tiles.splice(i, 1);
  if (!V.set || !tiles.some(t => t[0] === V.set)) return `<h2>${I('gear')} ${OWN ? 'ตั้งค่าหลังบ้าน' : 'ตั้งค่าเครื่องนี้'}</h2>${OWN ? '' : '<p class="mu">เมนู ราคา โปรไฟล์ร้าน และรายงาน ตั้งที่หน้าเจ้าของร้าน</p>'}<div class="grid mt" style="grid-template-columns:repeat(auto-fill,minmax(300px,1fr))">${tiles.map((t, i) => `<div class="card" style="cursor:pointer;display:flex;gap:14px;align-items:center" onclick="V.set='${t[0]}';draw();scrollTo(0,0)"><div style="width:56px;height:56px;border-radius:14px;background:var(--bg);display:flex;align-items:center;justify-content:center;font-size:28px">${t[1]}</div><div><b style="font-size:18px">${i + 1}. ${t[2]}</b><div class="mu">${t[3]}</div></div></div>`).join('')}</div>`;
  const t = tiles.find(x => x[0] === V.set);
  return `<div class="hd"><button onclick="V.set='';draw()">‹ ตั้งค่า</button><h2>${t[1]} ${t[2]}</h2><span style="width:70px"></span></div>` + ({dev: sDev, shop: sShop, menu: vMenu, trl: sTrl, qr: sQr, data: sData, out: sOut}[V.set])();
}
function togCh(gid, i) { const c = M.groups.find(g => g.id === gid).choices[i]; c.out = !c.out; saveM(); draw(); }
function sOut() { const btn = (on, label, fn) => `<button class="sm" style="margin:0 6px 6px 0;${on ? 'background:#fee2e2;color:var(--r);border-color:#fecaca;text-decoration:line-through' : ''}" onclick="${fn}">${on ? I('ban', 15) + ' ' : ''}${esc(label)}</button>`;
  return `<p class="mu">แตะเพื่อสลับ มีขาย ↔ หมด — มีผลกับทุกเครื่องและหน้าลูกค้าทันที</p>${M.cats.map(c => `<div class="card mt"><h3>${esc(c)}</h3><div class="mt">${M.menu.filter(m => m.cat === c).map(m => btn(m.out, m.name, `togOut('${m.id}')`)).join('')}</div></div>`).join('')}
  <h2 class="mt">ตัวเลือก</h2>${M.groups.map(g => `<div class="card mt"><h3>${esc(g.name)} ${g.note ? `<small class="mu">(${esc(g.note)})</small>` : ''}</h3><div class="mt">${g.choices.map((c, i) => btn(c.out, c.name, `togCh('${g.id}',${i})`)).join('')}</div></div>`).join('')}`; }
function sDev() {
  const want = D.vlang || D.lang, ok = hasTTS && (voiceFor(want) || !speechSynthesis.getVoices().length);
  return `<div class="split"><div class="card"><h3>เครื่องนี้ (ตั้งแยกกันได้ทุกเครื่อง)</h3>
  <label>ชื่อเครื่อง / ชื่อพนักงาน</label><input value="${esc(D.name)}" onchange="setD('name',this.value.trim()||'Staff')">
  <label>เครื่องนี้ใช้ทำอะไร</label><select onchange="setD('role',this.value)">${[['all', 'ทุกหน้า (แคชเชียร์)'], ['waiter', 'พนักงานเสิร์ฟ — เห็นแค่ โต๊ะ กับ เสิร์ฟ'], ['kitchen', 'ครัว — เห็นแค่หน้าครัว']].map(r => `<option value="${r[0]}" ${D.role === r[0] ? 'selected' : ''}>${r[1]}</option>`).join('')}</select>
  <label>เตือนออเดอร์ค้าง: เหลืองเมื่อเกิน / แดงเมื่อเกิน (นาที)</label><div class="row"><input type="number" min="1" value="${D.t1}" onchange="setD('t1',+this.value||8)"><input type="number" min="1" value="${D.t2}" onchange="setD('t2',+this.value||15)"></div>
  <label>ภาษาที่ใช้บนเครื่องนี้</label><select onchange="setD('lang',this.value)">${langOpts(M.slangs, D.lang)}</select>
  <h3 class="mt">${I('vol')} เสียงพูด</h3>
  <label class="ck"><input type="checkbox" ${D.voice ? 'checked' : ''} onchange="setD('voice',this.checked)"><span>เปิดเสียงประกาศบนเครื่องนี้</span></label>
  <label class="ck"><input type="checkbox" ${D.notif ? 'checked' : ''} onchange="if(this.checked&&window.Notification){Notification.requestPermission().then(p=>setD('notif',p==='granted'))}else setD('notif',false)"><span>แสดงการแจ้งเตือนของเครื่องเมื่อหน้าจอนี้ไม่ได้เปิดอยู่ด้านหน้า (คอมพิวเตอร์)</span></label>
  <label>ภาษาเสียงพูด</label><select onchange="setD('vlang',this.value)">${langOpts(Object.keys(LANGS), D.vlang, 'ตามภาษาของเครื่อง')}</select>
  <p class="mu" style="font-size:14px">${!hasTTS ? I('alert', 15) + ' เบราว์เซอร์นี้ไม่รองรับเสียงพูด' : ok ? I('check', 15) + ' เครื่องนี้มีเสียงภาษา ' + LANGS[want][0] : I('alert', 15) + ' เครื่องนี้ไม่มีเสียงภาษา ' + LANGS[want][0] + ' — จะพูดเป็นภาษาไทยแทน'}</p>
  <button onclick="speak(evText({type:'paid',t:'t4',method:'cash',net:105,recv:500,chg:395},vl()),vl())">▶️ ทดสอบเสียง</button>
  <label>ให้เครื่องนี้พูดเมื่อ</label>
  ${[['order', 'มีออเดอร์ใหม่'], ['cooked', 'ครัวทำเสร็จ พร้อมเสิร์ฟ'], ['served', 'เสิร์ฟแล้ว'], ['call', 'ลูกค้าเรียกพนักงาน / เช็คบิล'], ['paid', 'ชำระเงิน + เงินทอน']].map(([k, n]) => `<label class="ck"><input type="checkbox" ${D.say[k] ? 'checked' : ''} onchange="setSay('${k}',this.checked)"><span>${n}</span></label>`).join('')}</div>
  <div class="card"><h3>${I('printer')} ใบออเดอร์ครัว</h3>
  <label class="ck"><input type="checkbox" ${D.autoPrint ? 'checked' : ''} onchange="setD('autoPrint',this.checked)"><span>พิมพ์อัตโนมัติจากเครื่องนี้เมื่อมีออเดอร์ใหม่</span></label>
  <label class="ck"><input type="checkbox" ${D.phost ? 'checked' : ''} onchange="setD('phost',this.checked);if(this.checked)setD('rprint',false)"><span>เครื่องนี้เป็น<b>คอมเคาน์เตอร์</b> — รับงานพิมพ์ (ใบครัว, บิล, ใบเสร็จ) ที่ส่งมาจาก iPhone / iPad</span></label>
  <label class="ck"><input type="checkbox" ${D.rprint ? 'checked' : ''} onchange="setD('rprint',this.checked);if(this.checked)setD('phost',false)"><span>เครื่องนี้ไม่ได้ต่อเครื่องพิมพ์ — กดปุ่มพิมพ์ แล้วส่งไปพิมพ์ที่<b>คอมเคาน์เตอร์</b> (ใช้กับ iPhone / iPad)</span></label>
  <label>พิมพ์เฉพาะหมวด (ไม่ติ๊กเลย = ทุกหมวด)</label>${M.cats.map((c, i) => `<label class="ck"><input type="checkbox" ${D.pcats.includes(c) ? 'checked' : ''} onchange="togPcat(${i},this.checked)"><span>${esc(c)}</span></label>`).join('')}
  <label>ภาษาของใบครัวที่ออกจากเครื่องพิมพ์ของเครื่องนี้</label><select onchange="setD('plang',this.value)">${langOpts(M.slangs, D.plang, 'ตามภาษาของเครื่อง')}</select>
  <p class="mu" style="font-size:14px;margin:6px 0">ใบครัวมีภาษาไทยกำกับชื่อเมนูและตัวเลือกเสมอ เพื่อให้เจ้าของตรวจได้</p>
  <label>การแยกใบ / ตัดกระดาษ</label><select onchange="setD('cut',this.value)">${[['item', 'แยก 1 รายการ 1 ใบ (ไม่รวมกัน)'], ['unit', 'แยก 1 ชาม/ชิ้น 1 ใบ (สั่ง 3 ชาม ออก 3 ใบ)'], ['cat', 'แยกตามหมวด (ก๋วยเตี๋ยว 1 ใบ ของทานเล่น 1 ใบ)'], ['order', 'รวมทั้งออเดอร์ของโต๊ะไว้ใบเดียว']].map(o => `<option value="${o[0]}" ${(D.cut || 'item') === o[0] ? 'selected' : ''}>${o[1]}</option>`).join('')}</select>
  <p class="mu" style="font-size:14px;margin:6px 0">แต่ละใบถูกส่งเป็นคนละหน้า ให้ตั้งไดรเวอร์เครื่องพิมพ์เป็น "ตัดกระดาษทุกหน้า" (Cut per page) เครื่องจึงจะตัดให้ทีละใบ</p>
  <label class="ck"><input type="checkbox" ${D.rail ? 'checked' : ''} onchange="setD('rail',this.checked)"><span>ใช้กับรางเสียบบิล — เว้นหัวกระดาษไว้ให้รางหนีบ และพิมพ์เลขโต๊ะซ้ำที่ท้ายใบ</span></label>
  ${D.rail ? `<label>เว้นหัวกระดาษ (มม.)</label><input type="number" min="0" max="60" value="${D.railMm || 15}" onchange="setD('railMm',Math.max(0,Math.min(60,+this.value||15)))">` : ''}
  <label>ขนาดกระดาษ</label><select onchange="setD('paper',+this.value)"><option value="80" ${D.paper == 80 ? 'selected' : ''}>80 มม.</option><option value="58" ${D.paper == 58 ? 'selected' : ''}>58 มม.</option></select>
  <button class="mt" onclick="printTickets([['t1',[{name:M.menu[0].name,qty:1,opts:M.groups[0]?[M.groups[0].choices[0].name]:[],note:'ทดสอบ',at:Date.now(),by:D.name}]]])">${I('printer')} ทดสอบพิมพ์</button>
  <p class="mu" style="font-size:14px">เปิดพิมพ์อัตโนมัติเฉพาะเครื่องที่ต่อเครื่องพิมพ์ของครัวนั้น ๆ เครื่องเดียวต่อหนึ่งจุด</p></div></div><div class="mt" style="max-width:520px">${sConn()}</div>`;
}
function sShop() {
  if (M.payQrV) loadPayQr().then(() => { if ($('#sPqr')) $('#sPqr').innerHTML = PQR ? `<img src="${PQR}" style="width:84px;border-radius:8px">` : ''; });
  return `<div class="split"><div class="card"><h3>ร้าน (ใช้ร่วมกันทุกเครื่อง)</h3>
  <label>ชื่อร้าน</label><input id="sShop" value="${esc(M.shop)}"><label>จำนวนโต๊ะ</label><input id="sTables" type="number" min="1" max="200" value="${M.tables}">
  <label>พร้อมเพย์ (เบอร์มือถือ หรือเลขบัตร 13 หลัก)</label><input id="sPP" inputmode="numeric" value="${esc(M.promptpay)}"><label>ที่อยู่ร้าน (พิมพ์บนใบเสร็จ)</label><input id="sAddr" value="${esc(M.addr || '')}"><div class="row"><div><label>เบอร์โทร</label><input id="sTel" value="${esc(M.tel || '')}"></div><div><label>เลขประจำตัวผู้เสียภาษี</label><input id="sTax" value="${esc(M.tax || '')}"></div></div>
  <label>โลโก้บนใบเสร็จ</label><div class="row" style="align-items:center"><div style="flex:0 0 70px">${M.logo ? `<img src="${M.logo}" style="width:64px">` : '<span class="mu">ไม่มี</span>'}</div><input type="file" accept="image/*" onchange="setLogo(this)"><button class="sm d" style="flex:0" onclick="M.logo='';saveM();draw()">ลบ</button></div>
  <label>รูป QR รับเงิน (แสดงในหน้าคิดเงินเมื่อเลือก "โอน / QR" เช่น QR ร้านค้าจากแอปธนาคาร)</label><div class="row" style="align-items:center"><div id="sPqr" style="flex:0 0 90px">${M.payQrV ? '<span class="mu">กำลังโหลด…</span>' : '<span class="mu">ไม่มี</span>'}</div><input type="file" accept="image/*" onchange="setPayQr(this)"><button class="sm d" style="flex:0" onclick="setPayQr(null)">ลบ</button></div>
  <label>ชื่อบัญชีใต้ QR (ไม่บังคับ)</label><input value="${esc(M.payQrName || '')}" placeholder="เช่น กสิกร • ร้านรสจนา" onchange="M.payQrName=this.value.trim();saveM()">
  <label>ข้อความท้ายใบเสร็จ</label><input id="sFoot" value="${esc(M.footer)}">
  <label class="ck"><input type="checkbox" ${M.showPP !== false ? 'checked' : ''} onchange="M.showPP=this.checked;saveM()"><span>แสดง QR พร้อมเพย์ (ล็อกยอดเงิน) บนใบแจ้งรายการ</span></label>
  <label>แปลหมายเหตุของลูกค้า/พนักงานเป็นภาษาของแต่ละเครื่องอัตโนมัติ</label><select id="sMt"><option value="on" ${M.mt !== 'off' ? 'selected' : ''}>เปิด — ใช้ Google Translate</option><option value="off" ${M.mt === 'off' ? 'selected' : ''}>ปิด</option></select>
  <label>Google Cloud Translation API key (ใส่แล้วจะแปลด้วยบริการแบบเสียเงินของ Google — ไม่ใส่ = ใช้แบบฟรี)</label><div class="row"><input id="sMtK" style="flex:4" autocomplete="off" value="${esc(MTK)}" placeholder="AIza..."><button type="button" style="flex:1" onclick="mtTest()">ทดสอบ</button></div><div id="mtRes" class="mu" style="font-size:14px;margin-top:4px">${MTERR ? I('alert', 15) + ' ' + esc(MTERR) : ''}</div>
  <label>รหัส PIN เจ้าของร้าน (กันพนักงานเข้าหน้ารายงานและตั้งค่า — เว้นว่าง = ไม่ใช้)</label><input id="sPin" inputmode="numeric" value="${esc(M.pin || '')}">
  <label>ช่องทางชำระ/ขายอื่น ๆ (คั่นด้วย , )</label><input id="sCh" value="${esc(M.channels.join(', '))}">
  <button class="p mt" style="width:100%" onclick="saveShop()">บันทึก</button>
  <h3 class="mt">ภาษาที่ลูกค้าเลือกได้ (หน้าสแกนสั่ง)</h3><div>${langChecks('clangs')}</div>
  <h3 class="mt">ภาษาของพนักงาน (หลังร้าน)</h3><div>${langChecks('slangs')}</div><p class="mu" style="font-size:14px">ลูกค้าจะเห็นเฉพาะภาษาในรายการบน ภาษาของพนักงานไม่แสดงให้ลูกค้า</p></div>
  ${sConn()}</div>`;
}
function sConn() { const pl = BASE + 'pos.html' + (D.db ? '?db=' + encodeURIComponent(D.db) : ''), ol = BASE + 'owner.html' + (D.db ? '?db=' + encodeURIComponent(D.db) : '');
  return `<div class="card"><h3>เชื่อมหลายเครื่อง</h3><label>Firebase Realtime Database URL</label><input id="sDb" placeholder="https://xxxx-default-rtdb.asia-southeast1.firebasedatabase.app" value="${esc(D.db)}">
  <button class="mt" onclick="setDb()">บันทึกและโหลดใหม่</button>
  <p class="mu" style="font-size:14px">เว้นว่าง = ใช้ได้เฉพาะเครื่องนี้ • ใส่ URL = ทุกเครื่องและมือถือลูกค้าเห็นข้อมูลเดียวกัน</p>
  ${D.db ? `<h3 class="mt">ลิงก์สำหรับเครื่องพนักงานเครื่องอื่น</h3><div class="c" style="max-width:200px;margin:0 auto">${qrSvg(pl, 4)}</div><input readonly value="${esc(pl)}" onclick="this.select()">${OWN ? `<h3 class="mt">ลิงก์หน้าเจ้าของร้าน (อย่าให้พนักงาน)</h3><input readonly value="${esc(ol)}" onclick="this.select()">` : ''}` : ''}</div>`; }
function setPayQr(inp) { const f = inp && inp.files[0];
  if (!f) { if (!inp && confirm('ลบรูป QR รับเงิน?')) { PQR = null; M.payQrV = 0; W(store.del('payqr')); saveM(); draw(); } return; }
  loadImg(f, im => { PQR = shrink(im, 1000, f.type === 'image/png' ? 'image/png' : 'image/jpeg', .92); M.payQrV = PQRV = Date.now(); W(store.put('payqr', PQR)); saveM(); draw(); toast('บันทึก QR รับเงินแล้ว'); }); }
function setLogo(inp) { const f = inp.files[0]; if (!f) return; const im = new Image(); im.onload = () => { M.logo = shrink(im, 300, 'image/png'); saveM(); draw(); }; im.src = URL.createObjectURL(f); }
function saveShop() { Object.assign(M, {shop: $('#sShop').value.trim() || DEF.shop, tables: Math.max(1, Math.min(200, parseInt($('#sTables').value) || 1)), promptpay: $('#sPP').value.trim(), footer: $('#sFoot').value.trim(), addr: $('#sAddr').value.trim(), tel: $('#sTel').value.trim(), tax: $('#sTax').value.trim(), pin: $('#sPin').value.trim(), mt: $('#sMt').value, channels: [...new Set($('#sCh').value.split(',').map(x => x.trim()).filter(Boolean))]}); const k = $('#sMtK').value.trim(); if (k !== MTK) { MTK = k; MTERR = ''; M.mtKv = MTKV = Date.now(); Object.keys(NTC).forEach(x => delete NTC[x]); W(store.put('cfg/mtKey', k)); } saveM(); toast('บันทึกแล้ว'); draw(); }
function setDb() { D.db = $('#sDb').value.trim(); saveD(); location.reload(); }
function sTrl() {
  const langs = [...new Set([...M.clangs, ...M.slangs])].filter(l => l !== 'th'); if (!langs.includes(V.trl)) V.trl = langs[0] || '';
  const sec = (title, arr) => `<h3 class="mt">${title}</h3><div class="card" style="padding:4px 14px">${[...new Set(arr)].map(x => `<div class="line" style="align-items:center"><div class="n">${esc(x)}</div><input style="flex:1.3" data-k="${esc(x)}" value="${esc(((M.dict[x] || {})[V.trl]) || '')}" onchange="setTr(this)"></div>`).join('')}</div>`;
  if (!V.trl) return '<p class="mu">ยังไม่ได้เลือกภาษาอื่นในหน้า "ร้าน"</p>';
  const miss = dictMissing().length;
  return `<p class="mu">ระบบแปลชื่อเมนู หมวด และตัวเลือกให้อัตโนมัติด้วย Google ทุกครั้งที่เพิ่มหรือแก้เมนู ถ้าคำไหนแปลไม่ถูก แก้ในช่องได้เลย</p><div class="row" style="align-items:center;margin:6px 0 10px"><span class="mu" style="flex:1">${miss ? 'ยังไม่มีคำแปล ' + miss + ' ช่อง' : I('check', 15) + ' มีคำแปลครบทุกภาษา'}</span>${miss ? `<button class="p" style="flex:0;white-space:nowrap" onclick="autoDict(true)">แปลที่ยังว่างทั้งหมด</button>` : ''}</div><div class="chips">${langs.map(l => `<button class="${l === V.trl ? 'on' : ''}" onclick="V.trl='${l}';draw()">${LANGS[l][0]}${M.clangs.includes(l) ? ' ' + I('user', 14) : ''}${M.slangs.includes(l) ? ' ' + I('chef', 14) : ''}</button>`).join('')}</div><small class="mu">${I('user', 14)} ลูกค้าเห็น • ${I('chef', 14)} พนักงานเห็น</small>` +
    sec('หมวดหมู่', M.cats) + sec('เมนู', M.menu.map(m => m.name)) + sec('ตัวเลือก', M.groups.flatMap(g => [g.name, ...g.choices.map(c => c.name)])) +
    sec('คำในหมายเหตุที่จำไว้ (แก้คำที่แปลผิดได้ที่นี่)', phraseKeys()) + `<div class="row mt"><input id="phN" placeholder="เพิ่มคำ/ประโยคที่ลูกค้าเขียนบ่อย เช่น ไม่ใส่ผักชี"><button style="flex:0;white-space:nowrap" onclick="const v=$('#phN').value.trim();if(v){M.dict[v]=M.dict[v]||{'_p':1};saveM();draw()}">＋ เพิ่ม</button></div>`;
}
function phraseKeys() { const menu = new Set([...M.cats, ...M.menu.map(m => m.name), ...M.groups.flatMap(g => [g.name, ...g.choices.map(c => c.name)])]); return Object.keys(M.dict).filter(k => !menu.has(k) && Object.keys(M.dict[k]).length); }
function setTr(el) { const k = el.dataset.k, v = el.value.trim(); M.dict[k] = M.dict[k] || {}; if (v) M.dict[k][V.trl] = v; else delete M.dict[k][V.trl]; saveM(); }
function togHcat(i, on) { const c = M.cats[i]; M.hcats = M.cats.filter(x => x === c ? on : (M.hcats || []).includes(x)); saveM(); }
const custUrl = n => BASE + 'pos.html?t=' + n + (D.db ? '&db=' + encodeURIComponent(D.db) : '');
function sQr() { return `<div class="card"><h3>บริการลูกค้า</h3><label class="ck"><input type="checkbox" ${M.qrOpen !== false ? 'checked' : ''} onchange="M.qrOpen=this.checked;saveM()"><span>เปิดให้ลูกค้าสแกน QR สั่งอาหารเอง</span></label><label>หมวดที่ไม่แสดงให้ลูกค้า (พนักงานยังสั่งได้)</label>${M.cats.map((c, i) => `<label class="ck" style="display:inline-flex;border:0;margin-right:12px"><input type="checkbox" ${(M.hcats || []).includes(c) ? 'checked' : ''} onchange="togHcat(${i},this.checked)"><span>${esc(c)}</span></label>`).join('')}</div><div class="card mt"><div class="row" style="align-items:center"><h3>QR สั่งอาหารประจำโต๊ะ</h3><button class="sm" style="flex:0;white-space:nowrap" onclick="printQr()">${I('printer')} พิมพ์</button></div>${D.db ? '' : '<p class="mu">ยังไม่ได้เชื่อม Firebase — QR นี้ใช้ได้เฉพาะบนเครื่องนี้</p>'}
  <div class="qrs mt" id="qrs">${Array.from({length: M.tables}, (_, i) => i + 1).map(n => `<div class="qrc">${qrSvg(custUrl(n), 4)}<b>โต๊ะ ${n}</b><br><a href="${esc(custUrl(n))}" target="_blank" style="font-size:12px">เปิดหน้าลูกค้า</a></div>`).join('')}</div></div>`; }
function printQr() { const el = $('#print'); el.className = ''; el.innerHTML = `<h2 style="text-align:center">${esc(M.shop)} — สแกนเพื่อสั่งอาหาร / Scan to order</h2><div class="qrs" style="grid-template-columns:repeat(3,1fr)">${$('#qrs').innerHTML.replace(/<a [^>]*>.*?<\/a>/g, '')}</div>`; setTimeout(() => window.print(), 50); }
function seedMenu() { if (!confirm('แทนที่เมนู หมวด ตัวเลือก และคำแปลทั้งหมดด้วยเมนูตั้งต้นของร้าน?')) return; const d = clone(DEF); Object.assign(M, {cats: d.cats, groups: d.groups, menu: d.menu, dict: Object.assign(M.dict, d.dict)}); saveM(); toast('โหลดเมนูแล้ว'); draw(); }
function sData() { return `<div class="card"><h3>เมนูตั้งต้นของร้าน</h3><p class="mu">ใช้เมื่ออยากเริ่มใหม่จากเมนูของร้านที่ใส่ไว้ในระบบ (${SEED_MENU.length} รายการ)</p><button onclick="seedMenu()">${I('refresh', 16)} โหลดเมนูตั้งต้นของร้าน</button></div><div class="card mt"><h3>สำรอง / กู้คืน</h3><div class="row mt"><button onclick="loadSales().then(()=>dl('pos-backup-'+dayKey(Date.now())+'.json',JSON.stringify({M,SALES}),'application/json'))">${I('down', 16)} สำรองข้อมูล (เมนู + ยอดขาย)</button><button onclick="$('#rf').click()">${I('up', 16)} กู้คืน</button><input id="rf" type="file" accept=".json" style="display:none" onchange="restore(this)"></div></div>`; }
function restore(inp) { const f = inp.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => { try { const d = JSON.parse(r.result); if (!d.M || !d.M.menu) throw 0; if (confirm('แทนที่เมนูและยอดขายด้วยไฟล์นี้?')) { M = normM(d.M); saveM(); (d.SALES || []).forEach(s => W(store.put('sales/' + s.id, JSON.stringify(s)))); SALES = d.SALES || []; draw(); } } catch (e) { toast('ไฟล์ไม่ถูกต้อง'); } }; r.readAsText(f); }

/* ---------- จัดการเมนู (เขียนเป็นภาษาไทย แล้วไปแปลที่แท็บ "แปลภาษา") ---------- */
function vMenu() {
  return `<div class="row"><button class="p" onclick="editItem()">+ เพิ่มเมนู</button><button onclick="editCats()">หมวดหมู่</button><button onclick="editGroup()">+ กลุ่มตัวเลือก</button></div>
  ${M.cats.map(c => `<h3 class="mt">${esc(c)}</h3><div class="card" style="padding:4px 14px">${M.menu.filter(m => m.cat === c).map(m => `<div class="line" style="align-items:center"><div class="n" onclick="editItem('${m.id}')" style="cursor:pointer"><b>${esc(m.name)}</b> <span class="mu">${baht(m.price)}</span></div><button class="sm ${m.out ? 'd' : ''}" onclick="togOut('${m.id}')">${m.out ? 'หมด' : 'มีขาย'}</button><button class="sm" onclick="editItem('${m.id}')">แก้ไข</button></div>`).join('') || '<p class="mu">—</p>'}</div>`).join('')}
  <h3 class="mt">กลุ่มตัวเลือก</h3><div class="card" style="padding:4px 14px">${M.groups.map(g => `<div class="line" style="align-items:center"><div class="n"><b>${esc(g.name)}</b>${g.note ? ' <span class="mu">(' + esc(g.note) + ')</span>' : ''}<small class="mu th">${esc(g.choices.map(c => c.name + (c.price ? '+' + c.price : '')).join(', '))}</small></div><button class="sm" onclick="editGroup('${g.id}')">แก้ไข</button></div>`).join('')}</div>`;
}
function togOut(id) { const m = M.menu.find(x => x.id === id); m.out = !m.out; saveM(); draw(); }
function editItem(id) {
  const m = M.menu.find(x => x.id === id) || {name: '', price: '', cat: M.cats[0], opts: []}; EIMG = m.img || ''; EIMGL = undefined; EOPTS = m.opts.filter(g => M.groups.some(x => x.id === g));
  modal(`<h2>${id ? 'แก้ไขเมนู' : 'เพิ่มเมนู'}</h2><label>ชื่อ (ภาษาไทย)</label><input id="eN" value="${esc(m.name)}"><label>ราคา</label><input id="eP" type="number" inputmode="decimal" value="${m.price}">
  <label>หมวด</label><select id="eC">${M.cats.map(c => `<option ${c === m.cat ? 'selected' : ''}>${esc(c)}</option>`).join('')}</select>
  <label class="ck"><input type="checkbox" id="eR" ${m.rec ? 'checked' : ''}><span>${I('star', 16)} เมนูแนะนำ</span></label><label class="ck"><input type="checkbox" id="eQ" ${m.quick ? 'checked' : ''}><span>${I('zap', 16)} แสดงในปุ่ม "สั่งเพิ่ม" (กดทีเดียว ไม่ต้องเลือกตัวเลือก)</span></label><label class="ck"><input type="checkbox" id="eH" ${m.hide ? 'checked' : ''}><span>เห็นและสั่งได้เฉพาะพนักงาน (ไม่แสดงให้ลูกค้าที่สแกน QR)</span></label><label>ขายเฉพาะช่วงเวลา (เว้นว่าง = ทั้งวัน)</label><div class="row"><input type="time" id="eT1" value="${m.t1 || ''}"><input type="time" id="eT2" value="${m.t2 || ''}"></div><label>รูปอาหาร</label><div class="row" style="align-items:center"><div id="eImg" style="flex:0 0 110px">${EIMG ? `<img src="${EIMG}" style="width:110px;border-radius:10px">` : '<span class="mu">ไม่มีรูป</span>'}</div><input type="file" accept="image/*" onchange="pickImg(this)"><button class="sm d" style="flex:0" onclick="EIMG='';EIMGL=undefined;$('#eImg').innerHTML=''">ลบรูป</button></div>
  <label>ตัวเลือกของเมนูนี้ — เรียงตามลำดับที่ลูกค้าและพนักงานเห็น (กด ↑ ↓ เพื่อย้าย)</label><div id="eOpts"></div>
  <div class="row mt">${id ? `<button class="d" onclick="delMenu('${id}')">ลบ</button>` : ''}<button onclick="modal()">ยกเลิก</button><button class="p" onclick="saveItem('${id || ''}')">บันทึก</button></div>`); eoDraw();
}
/* ลำดับกลุ่มตัวเลือกของแต่ละเมนู */
let EOPTS = [];
const gLabel = g => esc(g.name) + (g.note ? ' <small class="mu">(' + esc(g.note) + ')</small>' : '');
function eoDraw() { const el = $('#eOpts'); if (!el) return; const n = EOPTS.length;
  el.innerHTML = (n ? EOPTS.map((gid, i) => { const g = M.groups.find(x => x.id === gid);
    return `<div class="line" style="align-items:center"><b style="min-width:22px">${i + 1}.</b><div class="n">${gLabel(g)}<small class="mu th">${esc(g.choices.slice(0, 5).map(c => c.name).join(', '))}${g.choices.length > 5 ? ' …' : ''}</small></div>
      <div class="qty" style="flex:none"><button title="ไว้บนสุด" onclick="eoMv(${i},'top')" ${i ? '' : 'disabled'}>${I('arTop', 16)}</button><button onclick="eoMv(${i},-1)" ${i ? '' : 'disabled'}>${I('arUp', 16)}</button><button onclick="eoMv(${i},1)" ${i < n - 1 ? '' : 'disabled'}>${I('arDown', 16)}</button><button class="d" onclick="EOPTS.splice(${i},1);eoDraw()">${I('x', 16)}</button></div></div>`; }).join('') : '<p class="mu" style="margin:4px 0">ยังไม่มีตัวเลือก</p>')
  + `<select class="mt" onchange="if(this.value){EOPTS.push(this.value);eoDraw()}"><option value="">＋ เพิ่มตัวเลือก…</option>${M.groups.filter(g => !EOPTS.includes(g.id)).map(g => `<option value="${g.id}">${esc(g.name)}${g.note ? ' (' + esc(g.note) + ')' : ''}</option>`).join('')}</select>`; }
function eoMv(i, d) { const [g] = EOPTS.splice(i, 1); EOPTS.splice(d === 'top' ? 0 : i + d, 0, g); eoDraw(); }
let EIMG = '';
/* ย่อรูปแบบคมชัด: ลดขนาดทีละครึ่งก่อน แล้วค่อยย่อครั้งสุดท้าย (ย่อทีเดียวจากรูปใหญ่มากจะแตก/เป็นรอยหยัก) */
function shrink(im, max, type, q) { let w = im.width, h = im.height, src = im; const sc = Math.min(1, max / Math.max(w, h)), tw = Math.round(w * sc), th = Math.round(h * sc);
  const cv = (cw, ch) => { const c = document.createElement('canvas'); c.width = cw; c.height = ch; const g = c.getContext('2d'); g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high'; if (type === 'image/jpeg') { g.fillStyle = '#fff'; g.fillRect(0, 0, cw, ch); } return [c, g]; };
  while (w / 2 > tw) { w = Math.round(w / 2); h = Math.round(h / 2); const [c, g] = cv(w, h); g.drawImage(src, 0, 0, w, h); src = c; }
  const [c, g] = cv(tw, th); g.drawImage(src, 0, 0, tw, th); return c.toDataURL(type, q); }
function loadImg(f, cb) { const im = new Image(); im.onload = () => { cb(im); URL.revokeObjectURL(im.src); }; im.onerror = () => toast('เปิดรูปนี้ไม่ได้'); im.src = URL.createObjectURL(f); }
let EIMGL;
/* รูปเล็ก (ในเมนู/ครัว) เก็บในเมนู • รูปใหญ่ (ตอนกดดูรายละเอียด) เก็บแยกที่ img/<id> ลูกค้าโหลดเฉพาะรูปที่กดดู */
function pickImg(inp) { const f = inp.files[0]; if (!f) return; loadImg(f, im => { EIMG = shrink(im, 480, 'image/jpeg', .82); EIMGL = shrink(im, 1200, 'image/jpeg', .85); $('#eImg').innerHTML = `<img src="${EIMG}" style="width:110px;border-radius:10px">`; }); }
const IMGL = {};
async function bigImg(m) { if (!m.imgL) return null; const k = m.id + m.imgL; if (IMGL[k] === undefined) { try { IMGL[k] = await store.get('img/' + m.id); } catch (e) { return null; } } return IMGL[k]; }
function saveItem(id) {
  const name = $('#eN').value.trim(), price = +$('#eP').value; if (!name || !(price >= 0)) return toast('กรอกชื่อและราคา');
  const v = {name, price, img: EIMG, rec: $('#eR').checked, hide: $('#eH').checked, quick: $('#eQ').checked, t1: $('#eT1').value, t2: $('#eT2').value, cat: $('#eC').value, opts: EOPTS.slice()};
  if (!id) { id = 'm' + uid(); M.menu.push({id, out: false}); }
  if (!EIMG) { v.imgL = 0; W(store.del('img/' + id)); } else if (EIMGL) { v.imgL = Date.now(); W(store.put('img/' + id, EIMGL)); }
  EIMGL = undefined; Object.assign(M.menu.find(x => x.id === id), v); saveM(); modal(); draw();
}
function delMenu(id) { if (confirm('ลบเมนูนี้?')) { M.menu = M.menu.filter(x => x.id !== id); saveM(); modal(); draw(); } }
function editCats() { modal(`<h2>หมวดหมู่</h2><label>หนึ่งบรรทัดต่อหนึ่งหมวด (เรียงตามลำดับที่แสดง)</label><textarea id="eCats" rows="7">${esc(M.cats.join('\n'))}</textarea><div class="row mt"><button onclick="modal()">ยกเลิก</button><button class="p" onclick="saveCats()">บันทึก</button></div>`); }
function saveCats() { const c = [...new Set($('#eCats').value.split('\n').map(s => s.trim()).filter(Boolean))]; M.menu.forEach(m => { if (!c.includes(m.cat)) c.push(m.cat); }); M.cats = c; saveM(); modal(); draw(); }
function editGroup(id) {
  const g = M.groups.find(x => x.id === id) || {name: '', required: false, multi: false, choices: []};
  modal(`<h2>${id ? 'แก้ไข' : 'เพิ่ม'}กลุ่มตัวเลือก</h2><label>ชื่อกลุ่ม (ภาษาไทย)</label><input id="gN" value="${esc(g.name)}"><label>หมายเหตุ (เห็นเฉพาะหน้าจัดการ เช่น ใช้กับชาม 25)</label><input id="gO" value="${esc(g.note || '')}">
  <label class="ck"><input type="checkbox" id="gR" ${g.required ? 'checked' : ''}><span>ต้องเลือก</span></label><label class="ck"><input type="checkbox" id="gM" ${g.multi ? 'checked' : ''}><span>เลือกได้หลายอย่าง</span></label><label>เลือกได้สูงสุดกี่อย่าง (เว้นว่าง = ไม่จำกัด)</label><input id="gX" type="number" min="1" value="${g.max || ''}"><label class="ck"><input type="checkbox" id="gE" ${g.rep ? 'checked' : ''}><span>กดตัวเลือกเดิมซ้ำได้ (เช่น ไข่ดาว x2)</span></label><label class="ck"><input type="checkbox" id="gP" ${g.pre ? 'checked' : ''}><span>แสดงชื่อกลุ่มนำหน้าตัวเลือกในออเดอร์ (เช่น เพิ่มเส้น: เล็ก)</span></label>
  <label>ตัวเลือก — บรรทัดละ 1 อย่าง, ใส่ราคาเพิ่มด้วย =  เช่น  พิเศษ=10</label><textarea id="gC" rows="7">${esc(g.choices.map(c => c.name + (c.price ? '=' + c.price : '')).join('\n'))}</textarea>
  <div class="row mt">${id ? `<button class="d" onclick="delGroup('${id}')">ลบ</button>` : ''}<button onclick="modal()">ยกเลิก</button><button class="p" onclick="saveGroup('${id || ''}')">บันทึก</button></div>`);
}
function saveGroup(id) {
  const name = $('#gN').value.trim(), choices = $('#gC').value.split('\n').map(l => l.trim()).filter(Boolean).map(l => { const [n, p] = l.split('='); return {name: n.trim(), price: +p || 0}; });
  if (!name || !choices.length) return toast('กรอกชื่อและตัวเลือก');
  const v = {name, note: $('#gO').value.trim(), pre: $('#gP').checked, max: +$('#gX').value || 0, rep: $('#gE').checked, choices, required: $('#gR').checked, multi: $('#gM').checked};
  if (id) Object.assign(M.groups.find(x => x.id === id), v); else M.groups.push({id: 'g' + uid(), ...v}); saveM(); modal(); draw();
}
function delGroup(id) { if (confirm('ลบกลุ่มนี้?')) { M.groups = M.groups.filter(g => g.id !== id); M.menu.forEach(m => m.opts = m.opts.filter(o => o !== id)); saveM(); modal(); draw(); } }

async function staffInit() {
  if (!OWN && ROLES[Q.get('role')]) D.role = Q.get('role');
  if (Q.get('db') || Q.get('role')) { if (Q.get('db')) D.db = Q.get('db'); history.replaceState(null, '', location.pathname); }
  saveD(); UL = OWN ? 'th' : LANGS[D.lang] ? D.lang : 'th'; document.documentElement.lang = UL; store = makeStore(D.db);
  try { const raw = await store.get('menu'); if (raw) M = normM(JSON.parse(raw)); }
  catch (e) { syncErr = e.message; M = normM(clone(DEF)); }
  if (!M) { M = normM(clone(DEF)); saveM(); }
  await loadMtKey();
  if (OWN && M.pin && !ownerUnlock()) return;
  V.tab = (ROLES[D.role] || ROLES.all)[0]; draw(); await poll(); loadSales().then(draw);
  setInterval(() => { if (['tables', 'kitchen', 'serve'].includes(V.tab)) draw(); else if (V.tab === 'dash') loadSales().then(() => V.tab === 'dash' && draw()); }, 30000); setInterval(poll, store.live ? 2500 : 1500); document.addEventListener('keydown', e => { if (e.ctrlKey || e.metaKey || e.altKey || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName) || $('#modal').innerHTML) return; const ts = ROLES[OWN ? 'all' : D.role] || ROLES.all, t = ts[+e.key - 1]; if (t) { e.preventDefault(); go(t); } }); setTimeout(() => autoDict(), 8000);
  window.addEventListener('storage', e => { if (e.key === 'rjr_tree') poll(); });
}
function ownerUnlock() { if (sessionStorage.getItem('rj_own') === M.pin) return true; const v = prompt('รหัส PIN เจ้าของร้าน'); if (v === M.pin) { sessionStorage.setItem('rj_own', v); return true; }
  $('#app').innerHTML = `<div class="wrap c" style="padding-top:80px"><h2>${I('lock')} หน้าเจ้าของร้าน</h2><p class="mu">PIN ไม่ถูกต้อง</p><button class="p" onclick="location.reload()">ลองอีกครั้ง</button></div>`; return false; }
!OWN && Q.get('t') ? custInit() : staffInit();
