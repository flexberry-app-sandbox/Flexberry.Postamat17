package Postamat17.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Postamat17.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Местоположение
 */
@Entity(name = "IISPostamat17Местоположение")
@Table(schema = "public", name = "Местоположение")
public class Mestopolozhenie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Состояние")
    private String состояние;

    @Column(name = "Информация")
    private String информация;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SluzhbaDostavki")
    @Convert("SluzhbaDostavki")
    @Column(name = "СлужбаДоставки", length = 16, unique = true, nullable = false)
    private UUID _sluzhbadostavkiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SluzhbaDostavki", insertable = false, updatable = false)
    private SluzhbaDostavki sluzhbadostavki;


    public Mestopolozhenie() {
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

    public String getСостояние() {
      return состояние;
    }

    public void setСостояние(String состояние) {
      this.состояние = состояние;
    }

    public String getИнформация() {
      return информация;
    }

    public void setИнформация(String информация) {
      this.информация = информация;
    }


}