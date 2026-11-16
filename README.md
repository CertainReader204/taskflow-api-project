# TaskFlow API

TaskFlow, bir yazılım ekibindeki görevlerin ve sorumlulukların yönetilmesi amacıyla geliştirilmiş başlangıç seviyesinde bir REST API projesidir. Node.js ve Express.js kullanılarak geliştirilmiştir.

## Özellikler

- Görev oluşturma
- Tüm görevleri listeleme
- Tek bir görevin detaylarını görüntüleme
- Görev güncelleme
- Görev silme
- Gelen istekleri sunucu konsolunda loglama

Proje, görev verilerini bellekte tutmaktadır. Bu sayede veritabanı eklenmeden Node.js, Express.js, REST API ve CRUD işlemlerine odaklanılması amaçlanmıştır. Sunucu yeniden başlatıldığında oluşturulan veya güncellenen veriler başlangıç durumuna döner.

## Proje kurulumu

Projeyi ilk kez oluştururken kullanılan temel Node.js ve Express kurulum adımları:

```bash
npm init -y
npm i express
```

Mevcut bir proje GitHub'dan indirildiğinde `package.json` dosyası projeyle birlikte geldiği için bağımlılıkları yüklemek amacıyla:

```bash
npm install
```

komutu kullanılabilir.

## Projeyi çalıştırma

Proje klasöründe terminal açın ve aşağıdaki komutu çalıştırın:

```bash
node --watch server.js
```

Sunucu çalıştığında API aşağıdaki adres üzerinden erişilebilir:

`http://localhost:3000`

`--watch` seçeneği sayesinde `server.js` veya projedeki ilgili dosyalarda yapılan değişikliklerden sonra Node.js sunucusu otomatik olarak yeniden başlatılır.

## API endpoint'leri

| Method | Endpoint | Açıklama |
| --- | --- | --- |
| GET | `/` | API'nin çalıştığını kontrol eder |
| GET | `/api/tasks` | Tüm görevleri listeler |
| GET | `/api/tasks/:id` | Belirli bir görevin detaylarını getirir |
| POST | `/api/tasks` | Yeni bir görev oluşturur |
| PUT | `/api/tasks/:id` | Belirli bir görevi günceller |
| DELETE | `/api/tasks/:id` | Belirli bir görevi siler |

### Görev oluşturma isteği

`POST /api/tasks` endpoint'ine JSON formatında aşağıdaki gibi bir istek gönderilebilir:

```json
{
  "title": "Giriş sayfasını tasarla",
  "description": "İlk giriş sayfası taslağını hazırla.",
  "status": "pending",
  "priority": "high",
  "assignee": "Ayşe Yılmaz"
}
```

`status` gönderilmediğinde varsayılan olarak `pending`, `priority` gönderilmediğinde ise `medium` değeri kullanılır.

## Postman test sırası

Temel URL olarak `http://localhost:3000` kullanılabilir.

CRUD işlemlerini test etmek için aşağıdaki sıra izlenebilir:

1. `GET /api/tasks`  
   Başlangıçtaki görevleri görüntüleyin.

2. `POST /api/tasks`  
   Yukarıdaki JSON gövdesini kullanarak yeni bir görev oluşturun. Response içerisinde dönen `id` değerini not edin.

3. `GET /api/tasks/:id`  
   Bir önceki adımda oluşturulan görevin `id` değerini kullanarak görev detaylarını görüntüleyin.

4. `PUT /api/tasks/:id`  
   Görevi güncellemek için örneğin aşağıdaki JSON gövdesini kullanabilirsiniz:

```json
{
  "status": "completed",
  "priority": "medium"
}
```

5. `DELETE /api/tasks/:id`  
   Aynı `id` değerini kullanarak oluşturduğunuz görevi silin.

6. `GET /api/tasks`  
   Görevin listeden kaldırıldığını kontrol edin.

Sunucu konsolunda her istek için HTTP metodu, endpoint ve zaman bilgisi loglanır.
