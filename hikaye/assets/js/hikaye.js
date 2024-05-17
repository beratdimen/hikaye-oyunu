alert(
  "Kayıp Hazinenin Peşinde \n\n" +
    "Eski haritalarla dolu bir arşivde çalışan bir arkeologsunuz. Bir gün, atalarınızdan kalma eski bir günlüğü buldunuz. Günlük, kayıp bir hazine hakkında ipuçları içeriyordu. Heyecanla günlüğü inceledikten sonra, gizemli hazinenin peşine düşmeye karar verdiniz. Ancak, bu hazineyi bulmak için kararlı bir şekilde ilerlemeli ve karşınıza çıkan engelleri aşmalısınız."
);
let secim = Number(
  prompt(
    "1. Günlükteki ipuçlarını takip ederek hazinenin peşine düşmek. \n\n 2. Güvenliği göz önünde bulundurarak daha fazla araştırma yapmak. "
  )
);

if (secim === 1) {
  alert(
    "Günlükteki ipuçlarını takip ederek maceraya atıldınız. \n\n İlk ipucu sizi eski bir tapınağa yönlendirdi. Tapınağın gizemli koridorlarında ilerlerken, antik tuzaklara ve bulmacalara dikkat etmelisiniz. Sonunda, ipucunun sizi götürdüğü noktaya ulaştınız: devasa bir taş kapının önünde duruyorsunuz. Kapının ardında hazine mi yoksa başka bir sürpriz mi sizi bekliyor, bilinmez."
  );
  let gunlukIpucuSecim = Number(
    prompt(
      "1. Taş kapıyı açmaya çalışmak. \n\n 2. Çevrede daha fazla araştırma yapmak ve gizli bir giriş bulmaya çalışmak."
    )
  );
  if (gunlukIpucuSecim == 1) {
    alert(
      "Taş kapıyı açmaya karar verdiğinizde, kararlılıkla önüne geçersiniz: \n\n Taş kapıya yaklaşıp, güçlü bir şekilde iterek açmaya çalışırsınız. Başlangıçta kapı kıpırdamaz gibi görünse de, azimle ve güçlü bir şekilde ittiğinizde kapı yavaşça açılmaya başlar. Taşlar arasından geçit açılırken, kapının arkasında başka bir odaya gizlice girersiniz. \n\nOdanın içinde antik bir tapınak olduğunu fark edersiniz. Duvarlarında eski semboller ve resimler vardır. Odanın ortasında, altından yapılmış büyük bir heykel durmaktadır. Heykelin altında bir sandık olduğunu fark edersiniz."
    );
    let tasKapiSandikSecim = Number(
      prompt(
        "1. Heykelin altındaki sandığı açmak ve içeriği incelemek.\n\n 2. Odada bulunan antik semboller ve resimler hakkında daha fazla bilgi edinmek için araştırma yapmak."
      )
    );
    if (tasKapiSandikSecim == 1) {
      alert(
        "Heykelin altındaki sandığı açmaya karar verdiniz: \n\n Sandığı açtığınızda, içinde eski yazılarla süslenmiş bir harita ve birkaç antik eşya buldunuz. Haritayı dikkatlice incelediğinizde, kayıp hazineye giden bir yol olduğunu fark edersiniz. Haritadaki ipuçlarını takip etmeye karar verirsiniz. \n\nAncak, haritadaki ipuçları sizi ormanın derinliklerine doğru yönlendirirken, birdenbire kapının arkasında bir gürültü duyarsınız. Ardından, odanın girişindeki taş kapının kapanış sesini işitirsiniz. Kapı kapanmış ve sizi içeride haps etmiş gibi görünüyor."
      );
      let kapaliKapi = Number(
        prompt(
          "1. Odayı araştırarak gizli bir çıkış bulmaya çalışmak. \n\n 2.Sesin kaynağını ve kapının kapanmasının sebebini keşfetmek için odanın girişine geri dönmek."
        )
      );

      if (kapaliKapi == 1) {
        alert(
          "Odada araştırma yaparak gizli bir çıkış bulmaya çalışırsınız. Uzun bir araştırma sürecinden sonra, bir köşede küçük bir çatlak fark edersiniz. Çatlaktan gelen hafif bir hava akımı, bu çatlakta bir çıkış olabileceğini işaret etmektedir. Hızla çatlak üzerine doğru ilerlersiniz ve dikkatlice ittiğinizde, bir kapının ardındaki gizli bir geçidi açılır. \n\n Gizli geçitten geçerken, özgürlüğünüzün tadını çıkarmaya başlarsınız. Ancak, önünüzdeki macerada karşılaşacağınız yeni zorluklara hazır olmalısınız. \n\n Tebrikler! Odadan başarıyla kaçtınız ve hazineyi bulma maceranız devam ediyor!"
        );
        let arastirmaYap = Number(
          prompt(
            "1. Haritadaki ipuçlarını takip ederek ormana doğru yol almak. \n\n 2.Odanın dışındaki tehlikeyi araştırmak ve kapının kapanmasının sebebini öğrenmek için odanın girişine geri dönmek."
          )
        );
        if (arastirmaYap == 1) {
          alert(
            "Haritadaki ipuçlarını takip ederek ormana doğru yol almaya karar verirsiniz. Her adımınızda, haritanın işaretlediği yönlerde ilerlersiniz ve ormanın derinliklerine doğru ilerlemeye başlarsınız. \n\nSonunda, haritanın gösterdiği noktaya ulaşırsınız ve karşınıza antik bir tapınak çıkar. Tapınağın girişine yaklaşırken, heyecanla içeriye adım atarsınız ve hazineyi aramak için yeni bir maceraya başlarsınız. \n\n Tebrikler! Hazineyi bulma yolculuğunuz devam ediyor! Şimdi ne yapmak istersiniz?"
          );
        } else if (arastirmaYap == 2) {
          alert(
            "Odanın dışındaki tehlikeyi araştırmak ve kapının kapanmasının sebebini öğrenmek için odanın girişine geri dönersiniz. Kapının kapanmasına neden olan mekanizmayı keşfedersiniz: Bir ip, kapıyı otomatik olarak kapatmak için tasarlanmış bir mekanizmayı harekete geçirmiştir. \n\nŞimdi ne yapmak istersiniz?"
          );
        } else {
          alert("Yanlış Seçim Yaptınız.");
        }
      } else if (kapaliKapi == 2) {
        alert(
          "Sesin kaynağını ve kapının kapanmasının sebebini öğrenmek için odanın girişine geri dönersiniz. Dikkatlice etrafa bakarken, kapının kapanmasına sebep olan mekanizmayı keşfedersiniz. Bir ipin, kapıyı otomatik olarak kapatmak için tasarlanmış bir mekanizmayı harekete geçirdiğini fark edersiniz. \n\nİpi takip ederek, odanın bir köşesinde küçük bir tuzağın olduğunu keşfedersiniz. Tuzak, içeri girenleri hapseden bir mekanizmadır ve sizi odada hapseder.\n\nŞimdi ne yapmak istersiniz?"
        );
        let sesKaynagi = Number(
          prompt(
            "1. Tuzaktan kurtulmak için bir yol bulmaya çalışmak. \n\n 2.Tuzakla başa çıkmak için çeşitli eşyaları kullanmak."
          )
        );
        if (sesKaynagi == 1) {
          alert(
            "Tuzaktan kurtulmaya çalışırsınız. Hızla etrafı gözden geçirir ve bir çıkış yolu bulursunuz. Dikkatlice tuzaktan uzaklaşırsınız ve serbest kalırsınız. \n\n Şimdi ne yapmak istersiniz?"
          );
          let tuzaktanKacma = Number(
            prompt(
              "1. Haritadaki ipuçlarını takip ederek ormana doğru yol almak. \n\n 2. Odanın dışındaki tehlikeyi araştırmak ve kapının kapanmasının sebebini öğrenmek için odanın girişine geri dönmek."
            )
          );
          if (tuzaktanKacma == 1) {
            alert(
              "Haritadaki ipuçlarını takip ederek ormana doğru yol alırsınız. Her adımınızda, haritanın işaretlediği yönlerde ilerlersiniz ve sonunda antik bir tapınağın önüne ulaşırsınız. Heyecanla içeri adım attığınızda, hazineyi aramak için yeni bir maceraya başlarsınız. \n\n Tebrikler! Hazineyi bulma yolculuğunuz başarıyla sona erdi! \n\n Yeni bir macerada buluşmak dileğiyle!"
            );
          } else if (tuzaktanKacma == 2) {
            alert(
              "Odanın dışındaki tehlikeyi araştırmak için odanın girişine geri dönersiniz. Kapının kapanmasına neden olan mekanizmayı keşfedersiniz: Bir ip, kapıyı otomatik olarak kapatmak için tasarlanmış bir mekanizmayı harekete geçirmiştir. \n\n Tehlikenin kaynağını bulduktan sonra, kapının kapanmasını engelleyen mekanizmayı devre dışı bırakırsınız ve odadan çıkarsınız. \n\n Tebrikler! Tehlikeyi bertaraf ettiniz ve maceranız sona erdi! \n\n Başka bir macerada buluşmak üzere!"
            );
          } else {
            alert("Yanlış Seçim Yaptınız.");
          }
        } else if (sesKaynagi == 2) {
          alert(
            "Tuzaktan kurtulduktan sonra, etrafınızda daha fazla araştırma yapmaya karar verirsiniz. Odanın dışında, gizemli bir sembolün kazınmış olduğu bir duvarı fark edersiniz. Sembolün anlamını ve neden burada olduğunu anlamak için daha yakından incelersiniz. \n\n Bir süre sonra, sembolün bir ipucu olduğunu fark edersiniz. Haritadaki sembollerle benzerlikler bulursunuz ve sembolün tapınağın gizli odalarını gösterdiğine inanırsınız. \n\n Şimdi ne yapmak istersiniz?"
          );
          let gizemliSembol = Number(
            prompt(
              "1. Sembolü takip ederek tapınağın gizli odalarını araştırmak. 2. Tehlikeyi araştırmadan önce haritadaki ipuçlarını takip etmeye devam etmek."
            )
          );
          if (gizemliSembol == 1) {
            alert(
              "Sembolü takip ederek tapınağın gizli odalarını araştırmaya karar verirsiniz. Sembolün işaret ettiği yönü takip ederek derinlere doğru ilerlersiniz. Sonunda, gizli bir geçidi bulursunuz ve içeriye adım atarsınız. \n\n Gizli odada, antik bir harita ve eski bir kitap bulursunuz. Harita, hazinenin bulunduğu yeri işaretlemekte ve kitap, tapınağın tarihini ve gizemlerini anlatmaktadır.\n\n Artık hazinenin nerede olduğunu biliyorsunuz ve yeni bir macera sizi bekliyor!"
            );
          } else if (gizemliSembol == 2) {
            alert(
              "Tehlikeyi araştırmadan önce haritadaki ipuçlarını takip etmeye devam etmeye karar verirsiniz. Haritanın işaret ettiği yönde ilerlemeye devam edersiniz ve sonunda haritanın gösterdiği noktaya ulaşırsınız.\n\n Bir ağacın altında, toprağın altına gömülü bir sandık bulursunuz. Heyecanla sandığı açarsınız ve içindeki hazinelerle karşılaşırsınız. \n\n Tebrikler! Zekanızı kullanarak haritadaki ipuçlarını takip ettiniz ve hazineyi buldunuz!\n\n Macera burada sona eriyor!"
            );
          } else {
            alert("Yanlış Seçim Yaptınız.");
          }
        } else {
          alert("Yanlış Seçim Yaptınız.");
        }
      } else {
        alert("Yanlış Seçim Yaptınız.");
      }
    } else if (tasKapiSandikSecim == 2) {
      alert(
        "Antik semboller ve resimler hakkında daha fazla bilgi edinmeye karar verdiniz: \n\n Odadaki antik semboller ve resimler hakkında daha fazla bilgi edinmek için araştırma yapmaya karar verirsiniz. Duvarlardaki sembollerin gizemini çözmek için dikkatlice incelemeye başlarsınız.\n\n Sembollerin anlamlarını araştırırken, birdenbire duvarda gizli bir geçide işaret eden bir sembol fark edersiniz. Bu keşif sizi heyecanlandırır ve gizli geçidi araştırmaya karar verirsiniz.\n\n  Şimdi ne yapmak istersiniz?"
      );
      let antikSembol = Number(
        prompt(
          "1. Gizli geçidi araştırmak ve nereye yol açtığını öğrenmek. \n\n 2. Oda içindeki diğer antik eşyaları incelemeye devam etmek."
        )
      );
      if (antikSembol == 1) {
        alert(
          "Gizli geçidi araştırmaya karar verir ve duvardaki sembolü takip ederek geçide doğru ilerlersiniz. Geçit sizi labirentin içine açar ve sonunda bir odaya ulaşırsınız. Odadaki sandık, antik bir harita ve değerli eşyalar içermektedir. Harita, kayıp hazinenin yerini işaret etmektedir. \n\n Tebrikler! Gizli geçidi buldunuz ve hazinenin izini sürmeye devam edebilirsiniz! \n\n Şimdi ne yapmak istersiniz?"
        );
        let sembolTakip = Number(
          prompt(
            "1. Haritadaki ipuçlarını takip ederek hazinenin yerini bulmaya devam etmek. \n\n 2. Odanın dışındaki tehlikeyi araştırmak ve kapının kapanmasının sebebini öğrenmek için odanın girişine geri dönmek."
          )
        );
        if (sembolTakip == 1) {
          alert(
            "Haritadaki ipuçlarını takip ederek hazinenin yerini bulmaya devam edersiniz. İzlediğiniz yollar sizi derin ormanın içine götürür ve sonunda eski bir tapınak kalıntısına ulaşırsınız. Tapınakta, haritadaki işaretlerle örtüşen bir oda bulursunuz ve içinde kayıp hazineyi keşfedersiniz. \n\n Tebrikler! Haritadaki ipuçlarını başarıyla takip ettiniz ve kayıp hazinenin izini buldunuz! \n Macera burada sona eriyor!"
          );
        } else if (sembolTakip == 2) {
          alert(
            "Odanın girişine geri dönersiniz ve dışarıdaki tehlikeyi araştırmaya başlarsınız. Etrafta izler ararken, ansızın bir gürültü duyarsınız. Ormanın derinliklerinden gelen bu ses, sizin dışında başka birinin varlığını işaret ediyor olabilir. Tehlikenin kökenini keşfetmek için dikkatlice ilerlemeye devam edersiniz. \n\n  Tebrikler! Tehlikenin kaynağını araştırdınız ve yeni bir maceraya hazırsınız! \n Macera burada sona eriyor!"
          );
        } else {
          alert("Yanlış Seçim Yaptınız.");
        }
      } else if (antikSembol == 2) {
        alert(
          "Diğer antik eşyaları incelemeye devam edersiniz. Bir köşede antik bir kılıç, bir başka köşede eski bir rulo halindeki yazılarla dolu bir parşömen bulursunuz. Parşömeni açtığınızda, tapınağın geçmişi hakkında bilgi veren eski bir hikaye keşfedersiniz. \n\n Hikayeyi dikkatlice incelerken, odanın bir köşesinde gizlenmiş bir geçit fark edersiniz. Bu geçidin nereye açıldığını öğrenmek için heyecanla ilerlemeye hazırsınız. \n\n Şimdi ne yapmak istersiniz?"
        );
      } else {
        alert("Yanlış Seçim Yaptınız.");
      }
    } else {
      alert("Yanlış Seçim Yaptınız.");
    }
  } else if (gunlukIpucuSecim == 2) {
    alert(
      "Çevrede daha fazla araştırma yapmaya ve gizli bir giriş bulmaya karar verdiniz: \n\n Etrafı daha detaylı incelemeye başlarken, duvarlarda ve zemindeki tuhaf desenlere dikkatinizi veriyorsunuz. Dikkatlice dokunarak ve basınç uygulayarak, bir tuğlanın içe doğru bastığınızda hafifçe kaydığını fark edersiniz. Bu tuğla, gizli bir geçidi açıyor olabilir. \n\n Gizli geçidi keşfettiğinize sevinirken, önünüzdeki macerayı düşünüyorsunuz."
    );
    let cevreArastirmaSecim = prompt(
      "1. Gizli geçitten ilerleyerek ne olduğunu görmek için içeri girin. \n\n 2. Gizli geçidi dikkatlice incelerken, etrafınızda herhangi bir tehlike olup olmadığını kontrol edin."
    );
    if (cevreArastirmaSecim == 1) {
      alert(
        "Gizli geçitten ilerleyerek ne olduğunu görmek için içeri girersiniz. Geçit sizi beklenmedik bir yerin içine açar. Karanlık bir tünelde ilerlerken, ansızın bir ışık huzmesi görürsünüz. \n\n Şimdi ne yapmak istersiniz? "
      );
      let karanlikTunel = Number(
        prompt(
          "1. Işığa doğru ilerlemek ve ne olduğunu keşfetmek. \n\n 2. Geri dönüp başka bir yolu denemek."
        )
      );
      if (karanlikTunel == 1) {
        alert(
          "Işığa doğru ilerleyerek, karanlık tünelden çıkarsınız ve önünüzde muhteşem bir manzara belirir: Kayıp hazinenin saklandığı antik bir tapınak! Işıltılı hazineler ve antik yapılar arasında gezinirken, maceranızın doruk noktasına ulaştığınızı hissedersiniz. \n\n Tebrikler! Zekanız ve cesaretinizle gizli geçidi başarıyla keşfettiniz ve kayıp hazinenin izini sürdünüz! \n\n Macera burada sona eriyor!"
        );
      } else if (karanlikTunel == 2) {
        alert(
          "Geri dönüp başka bir yol denemeye karar verirsiniz. Farklı bir geçidi aramak için dikkatlice etrafı gözden geçirirsiniz. Bir süre sonra, odanın başka bir köşesinde gizlenmiş bir geçit bulursunuz. Bu yeni yol sizi farklı bir maceranın başlangıcına götüreceğini hissedersiniz. \n\n Tebrikler! Yeniden zekanızı kullanarak gizli bir yol buldunuz ve maceranızı sürdürebilirsiniz! \n\n Macera burada sona eriyor!"
        );
        let tehlikeBelirtisi = Number(
          prompt(
            "1. Gizli geçide devam etmek ve içeride ne olduğunu görmek. \n\n 2. Geri dönüp başka bir yol denemek. "
          )
        );
        if (tehlikeBelirtisi == 1) {
          alert(
            "şığa doğru ilerleyerek, karanlık tünelden çıkarsınız ve önünüzde muhteşem bir manzara belirir: Kayıp hazinenin saklandığı antik bir tapınak! Işıltılı hazineler ve antik yapılar arasında gezinirken, maceranızın doruk noktasına ulaştığını hissedersiniz. \n Tebrikler! Zekanız ve cesaretinizle gizli geçidi başarıyla keşfettiniz ve kayıp hazinenin izini sürdünüz! \n\n Macera burada sona eriyor!"
          );
        } else if (tehlikeBelirtisi == 2) {
          alert(
            "Geri dönüp başka bir yol denemeye karar verirsiniz. Farklı bir geçidi aramak için dikkatlice etrafı gözden geçirirsiniz. Bir süre sonra, odanın başka bir köşesinde gizlenmiş bir geçit bulursunuz. Bu yeni yol sizi farklı bir maceranın başlangıcına götüreceğini hissedersiniz. \n\n Tebrikler! Yeniden zekanızı kullanarak gizli bir yol buldunuz ve maceranızı sürdürebilirsiniz! \n\n Macera burada sona eriyor!"
          );
        } else {
          alert("Yanlış Seçim Yaptınız.");
        }
      } else {
        alert("Yanlış Seçim Yaptınız.");
      }
    } else if (cevreArastirmaSecim == 2) {
      alert(
        "Gizli geçidi dikkatlice incelerken, etrafınızda herhangi bir tehlike olup olmadığını kontrol edersiniz. Dikkatli bir şekilde etrafı gözden geçirirsiniz ve herhangi bir tehlike belirtisi göremezsiniz. \n\n Şimdi ne yapmak istersiniz?"
      );
      let dikkatInceleme = Number(
        prompt(
          "1. Gizli geçide devam etmek ve içeride ne olduğunu görmek. \n\n 2. Başka bir yol denemek."
        )
      );
      if (dikkatInceleme == 1) {
        alert(
          "Gizli geçide devam etmeye karar verirsiniz, her adımınızda heyecanınız artar. Geçidin sonunda muhteşem bir manzara belirir: Kayıp hazinenin saklandığı antik bir tapınak! Işıltılı hazineler ve antik yapılar arasında gezinirken, maceranızın doruk noktasına ulaştığını hissedersiniz. \n\n Şimdi ne yapmak istersiniz?"
        );
        let tapinakHazine = Number(
          prompt(
            "1. Tapınaktaki hazineleri incelemek ve hazineler arasında kaybolmak. \n\n 2. Tapınaktan çıkıp başka bir maceraya atılmak."
          )
        );
        if (tapinakHazine == 1) {
          alert(
            "Tapınaktaki hazineleri incelemeye başlarsınız ve her biri tarihi ve estetik açıdan olağanüstü olan mücevherlerle dolu sandıklarla karşılaşırsınız. Ancak, hazinelerin büyüsüne kapılıp arasında kaybolursunuz, zamanın nasıl geçtiğini unutursunuz. Sonsuz bir serüvenin içinde kaybolmuş gibi hissedersiniz. \n\n Tebrikler! Tapınaktaki hazineleri keşfettiniz ve maceranızın tadını çıkardınız! \n\n Macera burada sona eriyor!"
          );
        } else if (tapinakHazine == 2) {
          alert(
            "Tapınaktaki maceranızın sonuna gelirsiniz ve dışarı adım attığınızda yeni bir maceraya atılmak için heyecan duyarsınız. Gökyüzünün altında, bilinmeyenin keşfi için heyecanla bekleyen bir dünya sizleri bekliyor. Yeni maceranızın başlangıcını kutlar ve heyecanla geleceğe doğru yol alırsınız. \n\n Tebrikler! Bir maceranın sonuna ulaştınız ve yeni bir başlangıç için hazırsınız! \n\n  Macera burada sona eriyor!"
          );
        } else {
          alert("Yanlış Seçim Yaptınız.");
        }
      } else if (dikkatInceleme == 2) {
        alert(
          "Başka bir yol denemeye karar verirsiniz ve odanın diğer köşelerini dikkatlice tararsınız. Bir süre sonra, duvarda gizlenmiş bir geçit keşfedersiniz. Yeni yol sizi farklı bir maceranın başlangıcına götüreceğini hissettirir. \n\n Şimdi ne yapmak istersiniz?"
        );
        let gizliYol = Number(
          prompt(
            "1. Gizli geçide devam etmek ve içeride ne olduğunu görmek. \n\n 2. Başka bir yol denemek."
          )
        );
        if (gizliYol == 1) {
          alert(
            "Gizli geçide kararlı adımlarla ilerlersiniz ve sonunda antik bir tapınağın içine adım atarsınız. Tapınak, muhteşem heykeller ve antik eşyalarla doludur. Işıltılı hazineler arasında gezinirken, maceranızın doruk noktasına ulaştığını hissedersiniz. \n\n Tebrikler! Zekanız ve cesaretinizle gizli geçidi başarıyla keşfettiniz ve kayıp hazinenin izini sürdünüz! \n\n Macera burada sona eriyor!"
          );
        } else if (gizliYol == 2) {
          alert(
            "Başka bir yol denemeye karar verirsiniz ve odanın diğer köşelerini dikkatlice tararsınız. Bir süre sonra, duvarda gizlenmiş bir geçit keşfedersiniz. Yeni yol sizi farklı bir maceranın başlangıcına götüreceğini hissettirir. \n\n Tebrikler! Yeniden zekanızı kullanarak gizli bir yol buldunuz ve maceranızı sürdürebilirsiniz! \n\n Macera burada sona eriyor!"
          );
        } else {
          alert("Yanlış Seçim Yaptınız.");
        }
      }
    } else {
      alert("Yanlış Seçim Yaptınız.");
    }
  } else {
    alert("Yanlış Seçim Yaptınız.");
  }
} else if (secim === 2) {
  alert(
    "Gizli geçidin dışına çıkarak, tünelin çevresindeki duvarları ve zemini dikkatlice inceliyorsunuz. Bir süre sonra, duvarın bir köşesinde küçük bir düğme olduğunu fark edersiniz. Dikkatlice düğmeye bastıktan sonra, duvarda hafif bir gıcırtı sesi duyulur ve ardından gizli bir bölme açılır."
  );
  let guvenlikSecim = Number(
    prompt(
      "1. Efsaneyi ve yeni ipuçlarını inceleyerek hazineyi bulmak için yola koyulmak. \n\n 2. Daha fazla araştırma yaparak odadaki diğer gizli sırları keşfetmek."
    )
  );

  if (guvenlikSecim === 1) {
    alert(
      "Efsaneyi ve yeni ipuçlarını inceleyerek hazineyi bulmak için yola koyulursunuz. Haritadaki işaretleri takip ederken derin ormanlara girersiniz ve sonunda eski bir tapınağın kalıntılarına ulaşırsınız. Tapınağın girişinde sizi bekleyen iki yol görürsünüz. \n\n Şimdi ne yapmak istersiniz?"
    );
    let efsaneIpucu = Number(
      prompt(
        "1. Sağdaki yolu takip etmek ve tapınağın içini keşfetmek. \n\n 2. Soldaki yolu izlemek ve ormanın derinliklerine ilerlemek."
      )
    );

    if (efsaneIpucu === 1) {
      alert(
        "Sağdaki yolu takip ederek tapınağın içine girersiniz. İçeride, duvarlarda antik yazıtlar ve heykellerle süslenmiş bir dizi oda bulursunuz. En büyük odada, ortada parlayan bir sandık dikkat çeker. \n\n Şimdi ne yapmak istersiniz?"
      );
      let sagdakiYol = Number(
        prompt(
          "1.Sandığı açmak ve içindekileri incelemek. \n\n   2. Odalardaki yazıtları ve heykelleri daha yakından incelemek."
        )
      );

      if (sagdakiYol === 1) {
        alert(
          "Sandığı açmaya karar verirsiniz ve kapağını yavaşça kaldırırsınız. İçeride, parıldayan mücevherler, antik parşömenler ve altın heykeller bulursunuz. Hazineyi keşfetmenin heyecanı sizi sarar ve uzun süredir aradığınız maceranın sonunda, ödülünüzü bulmuş olmanın tatminini yaşarsınız. \n\n Tebrikler! Gizemi başarıyla çözerek hazinenin sahibi oldunuz! \n\n Macera burada sona eriyor!"
        );
      } else if (sagdakiYol === 2) {
        alert(
          "Odalardaki yazıtları ve heykelleri daha yakından incelemeye karar verirsiniz. Her bir yazıt ve heykel, kayıp bir uygarlığın hikayesini anlatmaktadır. Tarihi ve kültürel değerlerle dolu bu keşif sizi büyüler ve arkeolojik bir hazinenin izini sürdüğünüzü fark edersiniz. \n\n Tebrikler! Antik tapınağın sırlarını başarıyla çözerek büyük bir keşif yaptınız! \n\n Macera burada sona eriyor!"
        );
      } else {
        alert("Yanlış Seçim Yaptınız.");
      }
    } else if (efsaneIpucu === 2) {
      alert(
        "Soldaki yolu izleyerek ormanın derinliklerine doğru ilerlersiniz. Yol, sizi büyük ağaçların ve yoğun bitki örtüsünün arasından geçirir. Bir süre sonra, göl kenarında gizlenmiş antik bir yapı keşfedersiniz.\n\n Şimdi ne yapmak istersiniz?"
      );
      let ormanDerinlikleri = Number(
        prompt(
          "1. Antik yapıya girmek ve içeride ne olduğunu keşfetmek. \n\n  2. Gölü araştırmak ve etrafında başka ipuçları aramak."
        )
      );

      if (ormanDerinlikleri === 1) {
        alert(
          "Antik yapıya girmeye karar verirsiniz ve içeri adım attığınızda karşınıza büyük bir salon çıkar. Duvarlarda eski freskler ve ortada büyük bir taş altar vardır. Altarın üzerinde eski bir kitap ve bir dizi sembol bulunmaktadır. \n\n Şimdi ne yapmak istersiniz?"
        );
        let antikYapi = Number(
          prompt(
            "1. Kitabı incelemek ve içindeki bilgileri okumak. \n\n 2. Sembolleri çözmeye çalışmak ve altarda gizli bir mekanizma olup olmadığını araştırmak. "
          )
        );
        if (antikYapi === 1) {
          alert(
            "Kitabı dikkatlice açar ve içindeki bilgileri okumaya başlarsınız. Sayfalar, kayıp uygarlığın tarihini ve büyük bir hazineye giden yolu anlatan haritalarla doludur. Kitabı inceledikçe, bu büyük sırrı çözmenin ve hazineye ulaşmanın heyecanını yaşarsınız.\n\n  Tebrikler! Antik yapının gizemlerini çözerek paha biçilmez bir bilgi hazinesine ulaştınız! \n\n Macera burada sona eriyor!"
          );
        } else if (antikYapi === 2) {
          alert(
            "Sembolleri dikkatlice incelemeye başlarsınız ve her birinin anlamını çözmeye çalışırsınız. Sembollerin bir sıralama oluşturduğunu fark edersiniz ve bu sıralamayı uygulayarak altarın gizli bir mekanizmasını harekete geçirirsiniz. Altar yavaşça kayarak açılır ve içinde değerli antik eşyalar ve belgelerle dolu gizli bir bölme ortaya çıkar. \n\n  Tebrikler! Sembolleri çözerek gizli mekanizmayı açtınız ve antik yapının sırlarına ulaştınız! \n\n Macera burada sona eriyor!"
          );
        }
      } else if (ormanDerinlikleri === 2) {
        alert(
          "Gölü araştırmaya karar verirsiniz ve etrafında dikkatlice dolaşırsınız. Su kenarında eski bir taş platform ve yanında gizemli sembollerle dolu bir taş tablet bulursunuz. Tablet üzerindeki semboller, çözülmeyi bekleyen bir bilmecenin parçaları gibi görünmektedir.\n\n  Şimdi ne yapmak istersiniz?"
        );
        let golArastirma = Number(
          prompt(
            "1. Taş platformu incelemek ve bir mekanizma olup olmadığını araştırmak. \n\n 2. Tablet üzerindeki sembolleri çözmeye çalışmak."
          )
        );
        if (golArastirma === 1) {
          alert(
            "aş platformu dikkatlice incelemeye başlarsınız ve üzerindeki gizli işaretleri fark edersiniz. İşaretleri takip ederek doğru noktaya baskı uyguladığınızda, platformun bir kısmı açılır ve içinde değerli antik eşyalar ve haritalar bulunan gizli bir bölme ortaya çıkar. \n\n Tebrikler! Taş platformdaki gizli mekanizmayı bularak antik hazineleri keşfettiniz! \n Macera burada sona eriyor!"
          );
        } else if (golArastirma === 2) {
          alert(
            "Tablet üzerindeki sembolleri dikkatlice incelemeye başlarsınız ve sembollerin anlamlarını çözmeye çalışırsınız. Uzun bir süre sonra, sembollerin bir bilmecenin parçalarını oluşturduğunu fark edersiniz. Bilmecenin son parçasını çözdüğünüzde, tabletten yükselen bir ışık sizi aydınlatır ve gizli bir mekanizma açılır. Mekanizmanın açılmasıyla birlikte, suyun altında parlayan antik bir hazinenin parçalarını görebilirsiniz. \n\n Tebrikler! Tablet üzerindeki sembolleri çözerek antik hazinenin izini sürdünüz! \n\n Macera burada sona eriyor!"
          );
        }
      }
    } else {
      alert("Yanlış Seçim Yaptınız.");
    }
  } else if (guvenlikSecim === 2) {
    alert(
      "Daha fazla araştırma yaparak odadaki diğer gizli sırları keşfetmeye karar verdiniz: \n\n Etrafı dikkatlice incelemeye devam edersiniz ve duvarda bir çatlak fark edersiniz. Çatlak, bir kapının gizli bir geçidi olduğunu ortaya çıkarır. Kapının ardında, eski bir kitaplık ve bir sandalye bulunur. Kitaplığın içinde bir defter bulursunuz ve defterde tapınakla ilgili ipuçları ve gizli odanın amacı hakkında bilgiler bulunur. Daha sonra, kitaplığın içinden bir düğmeye basarsınız ve bir bölme açılır. Bölmede, eski bir harita ve antik eşyalar bulunur."
    );
    let gizliGecit = Number(
      prompt(
        "1. Haritayı incelemek ve tapınaktaki gizli odaları keşfetmek. \n\n 2. Antik eşyaları incelemek ve onların hikayelerini öğrenmek."
      )
    );
    if (gizliGecit == 1) {
      alert(
        "Haritayı inceleyerek ve tapınaktaki gizli odaları keşfetmeye karar verdiniz: \n\n Haritayı inceleyerek tapınaktaki gizli odaları keşfedersiniz ve hazineye giden yolu bulursunuz. Odalardan birinde, hazineye giden bir yol olduğunu belirleyerek ilerlemeye karar verirsiniz. Yol boyunca eski tuzaklardan kaçınarak ilerler ve sonunda hazine odasına ulaşırsınız."
      );
      let haritaInceleme = Number(
        prompt(
          "1. Hazineyi alarak tapınağı terk etmek ve zenginlikle dönüşmek. \n\n 2. Tapınaktaki diğer odaları keşfetmek ve daha fazla sırrı çözmeye çalışmak."
        )
      );
      if (haritaInceleme === 1) {
        alert(
          "Hazine odasına ulaştığınızda, hazineyi alarak tapınağı terk etmeye karar verirsiniz. Değerli mücevherler ve antik eşyalarla dolu sandıkları toplar ve maceranızın meyvesini almanın heyecanını yaşarsınız. Zenginlikle dönüşerek, artık hayallerinizin ötesinde bir yaşam sizi bekliyor. \n\n Yeni zenginliklerle dolu bir gelecek sizi bekliyor!"
        );
      } else if (haritaInceleme === 2) {
        alert(
          "Hazine odasına ulaşmanıza rağmen, merakınız ve keşfetme arzunuz sizi geri döndürür. Diğer odaları keşfetmeye devam ederek tapınağın daha derin sırlarını çözmek için adımlar atarsınız. Her odada yeni ipuçları ve gizemlerle karşılaşarak, kayıp hazinenin hikayesini tamamlamak için çalışırsınız. Maceranın heyecanı ve keşfetme tutkunuz sizi yeni sırların ve büyüleyici keşiflerin beklediği bir yolculuğa götürür. \n\n Yeni maceralara doğru heyecanla ilerliyorsunuz!"
        );
      } else {
        alert("Yanlış Seçim Yaptınız.");
      }
    } else if (gizliGecit == 2) {
      alert(
        "Antik eşyaları incelemeye karar verdiniz: \n\n Antik eşyaları incelediğinizde, her birinin kendine özgü bir hikayesi olduğunu fark edersiniz. Her bir eşya, tapınağın geçmişine ve belki de hazineyle ilgili gizli ipuçlarına dair önemli bilgiler taşıyor olabilir.\n\n Şimdi ne yapmak istersiniz?"
      );
      let antikEsyaInceleme = Number(
        prompt(
          "1.Eşyaları ayrıntılı bir şekilde incelemek ve gizli ipuçlarını çözmeye çalışmak. \n\n 2. Tapınağı terk edip başka bir maceraya yelken açmak."
        )
      );
      if (antikEsyaInceleme === 1) {
        alert(
          "Antik eşyaları ayrıntılı bir şekilde incelemeye karar verirsiniz. Her bir eşya, geçmişten gelen bir hikaye anlatmaktadır. Eşyaların üzerindeki semboller ve yazıtlar, tapınağın sırlarını açığa çıkarabilir. Detaylı inceleme sırasında, gizli bir odanın varlığına dair ipuçları bulursunuz. Bu ipuçları sizi daha derin bir maceraya doğru yönlendirir. \n\n Şimdi ne yapmak istersiniz?"
        );
        let esyaSembol = Number(
          prompt(
            "1. Gizli odanın izini sürmek ve maceraya devam etmek. \n\n 2. Diğer eşyaları incelemek ve daha fazla bilgi edinmeye çalışmak."
          )
        );
        if (esyaSembol === 1) {
          alert(
            "Gizli odanın izini sürmeye karar verir ve maceranıza devam edersiniz. Tapınağın gizemli sırlarını çözmek ve kayıp hazinenin peşine düşmek için heyecanla ilerlersiniz. Yolculuğunuz boyunca karşınıza çıkacak zorlukları aşmak için cesaretinizi ve zekanızı kullanmaya hazırsınız. \n\n Yeni maceralara doğru yelken açtınız!"
          );
        } else if (esyaSembol === 2) {
          alert(
            "Diğer eşyaları detaylı bir şekilde incelemeye karar verirsiniz. Her bir eşyanın ardında saklı olan hikayeleri öğrenmek için zaman ayırırsınız. Eşyaların üzerindeki semboller ve yazıtlar, size tapınağın geçmişi hakkında önemli bilgiler sunar. Yolculuğunuz boyunca öğreneceğiniz bu bilgilerle, yeni maceralara ve keşiflere hazırlıklı olursunuz. \n\n Yeni bilgilerle dolu bir yolculuğa adım attınız!"
          );
        } else {
          alert("Yanlış Seçim Yaptınız.");
        }
      } else if (antikEsyaInceleme === 2) {
        alert(
          "Tapınağı terk etmeye karar verir ve yeni maceraların peşine düşersiniz. Yolculuğunuzda keşfedeceğiniz yeni yerler ve gizemler sizi heyecanlandırır. Belki de kayıp hazinelerin peşine düşerek yeni maceraların kapılarını aralayacaksınız. Gelecekte sizi bekleyen bilinmeyenin heyecanıyla yola çıkarsınız. \n\n Yeni maceralara hazır olun!"
        );
      } else {
        alert("Yanlış Seçim Yaptınız.");
      }
    } else {
      alert("Yanlış Seçim Yaptınız.");
    }
  } else {
    alert("Yanlış Seçim Yaptınız.");
  }
} else {
  alert("Yanlış Seçim Yaptınız.");
}
