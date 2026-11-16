# TaskFlow Project 

## Amaç

Bu proje kapsamında katılımcıların eğitim süresince edindikleri bilgi ve becerilerini uygulamalı olarak göstermeleri amaçlanmaktadır. Katılımcılardan gerçek hayatta kullanılabilecek bir Görev ve Proje Yönetim Sistemi API'si tasarlamaları ve geliştirmeleri beklenmektedir.

## Senaryo

Bir yazılım şirketi, ekip içerisindeki görevleri, projeleri ve çalışanların sorumluluklarını takip etmek istemektedir.

## Veri modeli

Her görev aşağıdaki alanları içerir:

- `id`: Göreve ait benzersiz sayısal kimlik
- `title`: Görevin adı
- `description`: Görevin açıklaması ve detayları
- `status`: Görevin mevcut durumu
- `priority`: Görevin öncelik seviyesi
- `assignee`: Görevden sorumlu çalışan
- `createdAt`: Görevin oluşturulma zamanı
- `updatedAt`: Görevin son güncellenme zamanı

Görevler, JavaScript içerisinde bellekte tutulan bir dizi (array) üzerinde saklanmaktadır. Böylece projeye bir veritabanı eklemeden REST API ve CRUD işlemlerine odaklanılması amaçlanmıştır.

## Sistem özeti

Express sunucusu HTTP isteklerini karşılar. Görev yönlendiricisi (router), gelen istekleri ilgili controller fonksiyonlarına yönlendirir. Controller fonksiyonları ise görev verilerini okuma veya güncelleme işlemlerini gerçekleştirir. Logger middleware'i, sunucuya gelen her isteğin HTTP metodunu, endpoint bilgisini ve zaman bilgisini sunucu konsoluna kaydeder.

Gerekli görev işlemleri `/api/tasks` altında sunulmaktadır:

- `POST /api/tasks`
- `GET /api/tasks`
- `GET /api/tasks/:id`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`