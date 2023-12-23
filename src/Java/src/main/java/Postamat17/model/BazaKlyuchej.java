package Postamat17.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Postamat17.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: БазаКлючей
 */
@Entity(name = "IISPostamat17БазаКлючей")
@Table(schema = "public", name = "БазаКлючей")
public class BazaKlyuchej {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерБазы")
    private Integer номербазы;

    @OneToMany(mappedBy = "bazaklyuchej", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Klyuch> klyuchs;


    public BazaKlyuchej() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерБазы() {
      return номербазы;
    }

    public void setНомерБазы(Integer номербазы) {
      this.номербазы = номербазы;
    }


}