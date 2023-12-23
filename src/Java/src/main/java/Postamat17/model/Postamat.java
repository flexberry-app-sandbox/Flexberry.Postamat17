package Postamat17.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Postamat17.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Постамат
 */
@Entity(name = "IISPostamat17Постамат")
@Table(schema = "public", name = "Постамат")
public class Postamat {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Адрес")
    private String адрес;

    @Column(name = "Статус")
    private String статус;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SluzhbaDostavki")
    @Convert("SluzhbaDostavki")
    @Column(name = "СлужбаДоставки", length = 16, unique = true, nullable = false)
    private UUID _sluzhbadostavkiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SluzhbaDostavki", insertable = false, updatable = false)
    private SluzhbaDostavki sluzhbadostavki;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "BazaKlyuchej")
    @Convert("BazaKlyuchej")
    @Column(name = "БазаКлючей", length = 16, unique = true, nullable = false)
    private UUID _bazaklyuchejid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "BazaKlyuchej", insertable = false, updatable = false)
    private BazaKlyuchej bazaklyuchej;

    @OneToMany(mappedBy = "postamat", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<RegistrXran> registrxrans;


    public Postamat() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }

    public String getСтатус() {
      return статус;
    }

    public void setСтатус(String статус) {
      this.статус = статус;
    }


}