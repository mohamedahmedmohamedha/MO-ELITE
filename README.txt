VORTEX STUDY — ADMIN + APP COMPLETE DEPLOY PACKAGE

هذه الحزمة تحتوي على:
- admin.html
- index.html
- register.html
- firebase-config.js
- firestore.rules
- functions/listVortexAccounts
- firebase.json
- .firebaserc
- manifest + service worker + logo

الأدمن المسموح به:
mohamedhamed_2022@icloud.com

مهم: كلمة مرور الأدمن لا توضع داخل أي ملف. يجب أن تكون كلمة مرور حساب Firebase Authentication نفسه.

النشر من جذر المشروع:
1) ثبّت Firebase CLI وسجل الدخول.
2) تأكد أن المشروع الحالي هو mo-elite.
3) داخل functions نفّذ: npm install
4) من جذر المشروع نفّذ: firebase deploy --only functions,firestore:rules,hosting

بدون نشر Cloud Function لن يستطيع المتصفح تعداد كل مستخدمي Firebase Authentication، لأن Firebase Admin SDK يجب أن يعمل على الخادم وليس داخل المتصفح.

الأدمن يبدأ من Firestore مباشرةً، ثم يطلب inventory حسابات Authentication عبر Callable Function في الخلفية. لو تعطلت الوظيفة، لن تختفي قائمة Firestore ولن تتجمد اللوحة.
