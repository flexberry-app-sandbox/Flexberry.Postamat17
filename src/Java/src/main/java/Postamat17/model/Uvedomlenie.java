package Postamat17.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Postamat17.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Уведомление
 */
@Entity(name = "IISPostamat17Уведомление")
@Table(schema = "public", name = "Уведомление")
public class Uvedomlenie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Уведомление")
    private String уведомление;

    @Column(name = "СгенКлюч")
    private Integer сгенключ;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "НомерПосылки")
    private Integer номерпосылки;

    @Column(name = "НомерТелефона")
    private Integer номертелефона;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Xranenie")
    @Convert("Xranenie")
    @Column(name = "Хранение", length = 16, unique = true, nullable = false)
    private UUID _xranenieid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Xranenie", insertable = false, updatable = false)
    private Xranenie xranenie;


    public Uvedomlenie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getУведомление() {
      return уведомление;
    }

    public void setУведомление(String уведомление) {
      this.уведомление = уведомление;
    }

    public Integer getСгенКлюч() {
      return сгенключ;
    }

    public void setСгенКлюч(Integer сгенключ) {
      this.сгенключ = сгенключ;
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