package Postamat17.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Postamat17.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Ключ
 */
@Entity(name = "IISPostamat17Ключ")
@Table(schema = "public", name = "Ключ")
public class Klyuch {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "СгенКлюч")
    private Integer сгенключ;

    @Column(name = "Уведомление")
    private String уведомление;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "НомерПосылки")
    private Integer номерпосылки;

    @Column(name = "НомерТелефона")
    private Integer номертелефона;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Polzovatel")
    @Convert("Polzovatel")
    @Column(name = "Пользователь", length = 16, unique = true, nullable = false)
    private UUID _polzovatelid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Polzovatel", insertable = false, updatable = false)
    private Polzovatel polzovatel;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Xranenie")
    @Convert("Xranenie")
    @Column(name = "Хранение", length = 16, unique = true, nullable = false)
    private UUID _xranenieid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Xranenie", insertable = false, updatable = false)
    private Xranenie xranenie;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "BazaKlyuchej")
    @Convert("BazaKlyuchej")
    @Column(name = "БазаКлючей", length = 16, unique = true, nullable = false)
    private UUID _bazaklyuchejid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "BazaKlyuchej", insertable = false, updatable = false)
    private BazaKlyuchej bazaklyuchej;


    public Klyuch() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getСгенКлюч() {
      return сгенключ;
    }

    public void setСгенКлюч(Integer сгенключ) {
      this.сгенключ = сгенключ;
    }

    public String getУведомление() {
      return уведомление;
    }

    public void setУведомление(String уведомление) {
      this.уведомление = уведомление;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Integer getНомерПосылки() {
      return номерпосылки;
    }

    public void setНомерПосылки(Integer номерпосылки) {
      this.номерпосылки = номерпосылки;
    }

    public Integer getНомерТелефона() {
      return номертелефона;
    }

    public void setНомерТелефона(Integer номертелефона) {
      this.номертелефона = номертелефона;
    }


}