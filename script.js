document.addEventListener('DOMContentLoaded', function() {
    // نافذة تنبيه عند إرسال نموذج الاتصال
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // منع إعادة تحميل الصفحة
        alert('تم إرسال رسالتك بنجاح!');
        this.reset(); // إعادة تعيين النموذج بعد الإرسال
    });

    // تأثير بسيط عند تمرير الماوس على أزرار التنقل
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#ff6347'; // تغيير لون النص عند تمرير الماوس
        });
        link.addEventListener('mouseleave', function() {
            this.style.color = ''; // إعادة تعيين اللون الأصلي عند إزالة الماوس
        });
    });
});
