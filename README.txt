MO ELITE — Firebase Complete
1) Upload all files to your GitHub Pages repo root.
2) In Firebase Authentication, enable Email/Password.
3) In Firestore, publish firestore.rules from this package.
4) Open the site and create student accounts.
5) Admin email is configured as: mohamedhamed_2022@icloud.com
6) Do not put any Firebase service-account private key in frontend files.


إصلاحات هذه النسخة:
- منع تسابق عمليات مزامنة Firebase وكتابة نسخة أقدم فوق الأحدث.
- حفظ نسخة محلية مرتبطة بكل حساب حتى لا تضيع التعديلات عند فشل المزامنة مؤقتًا.
- اختيار النسخة الأحدث بين التخزين المحلي وFirebase عند تسجيل الدخول.
- إضافة استعادة كلمة المرور من شاشة تسجيل الدخول.
- تحسين التعامل مع حساب الأدمن غير المصرح به.
- لوحة الأدمن أصبحت تتحمل وجود سجلات قديمة بدون lastSeenAt ولا تعتمد على ترتيب Firestore لعرضها.

مهم: يجب نشر firestore.rules الموجودة مع هذه النسخة وتفعيل Email/Password في Firebase Authentication.
