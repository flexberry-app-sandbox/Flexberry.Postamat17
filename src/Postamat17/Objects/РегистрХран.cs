﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Postamat17
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Регистр хран.
    /// </summary>
    // *** Start programmer edit section *** (РегистрХран CustomAttributes)

    // *** End programmer edit section *** (РегистрХран CustomAttributes)
    [AutoAltered()]
    [Caption("Регистр хран")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РегистрХранE", new string[] {
            "Хранение as \'Хранение\'",
            "Хранение.Продления as \'Продления\'",
            "Хранение.ДатаНачала as \'Дата начала хранения\'",
            "Хранение.ДатаЗавершения as \'Дата завершения хранения\'",
            "Хранение.Ячейка.НомерЯчейки as \'Номер ячейки\'"}, Hidden=new string[] {
            "Хранение.Продления"})]
    [MasterViewDefineAttribute("РегистрХранE", "Хранение", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Продления")]
    public class РегистрХран : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Postamat17.Хранение fХранение;
        
        private IIS.Postamat17.Постамат fПостамат;
        
        // *** Start programmer edit section *** (РегистрХран CustomMembers)

        // *** End programmer edit section *** (РегистрХран CustomMembers)

        
        /// <summary>
        /// Регистр хран.
        /// </summary>
        // *** Start programmer edit section *** (РегистрХран.Хранение CustomAttributes)

        // *** End programmer edit section *** (РегистрХран.Хранение CustomAttributes)
        [PropertyStorage(new string[] {
                "Хранение"})]
        [NotNull()]
        public virtual IIS.Postamat17.Хранение Хранение
        {
            get
            {
                // *** Start programmer edit section *** (РегистрХран.Хранение Get start)

                // *** End programmer edit section *** (РегистрХран.Хранение Get start)
                IIS.Postamat17.Хранение result = this.fХранение;
                // *** Start programmer edit section *** (РегистрХран.Хранение Get end)

                // *** End programmer edit section *** (РегистрХран.Хранение Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистрХран.Хранение Set start)

                // *** End programmer edit section *** (РегистрХран.Хранение Set start)
                this.fХранение = value;
                // *** Start programmer edit section *** (РегистрХран.Хранение Set end)

                // *** End programmer edit section *** (РегистрХран.Хранение Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Postamat17.Постамат.
        /// </summary>
        // *** Start programmer edit section *** (РегистрХран.Постамат CustomAttributes)

        // *** End programmer edit section *** (РегистрХран.Постамат CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Постамат"})]
        public virtual IIS.Postamat17.Постамат Постамат
        {
            get
            {
                // *** Start programmer edit section *** (РегистрХран.Постамат Get start)

                // *** End programmer edit section *** (РегистрХран.Постамат Get start)
                IIS.Postamat17.Постамат result = this.fПостамат;
                // *** Start programmer edit section *** (РегистрХран.Постамат Get end)

                // *** End programmer edit section *** (РегистрХран.Постамат Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистрХран.Постамат Set start)

                // *** End programmer edit section *** (РегистрХран.Постамат Set start)
                this.fПостамат = value;
                // *** Start programmer edit section *** (РегистрХран.Постамат Set end)

                // *** End programmer edit section *** (РегистрХран.Постамат Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РегистрХранE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РегистрХранE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РегистрХранE", typeof(IIS.Postamat17.РегистрХран));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of РегистрХран.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfРегистрХран CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfРегистрХран CustomAttributes)
    public class DetailArrayOfРегистрХран : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Postamat17.DetailArrayOfРегистрХран members)

        // *** End programmer edit section *** (IIS.Postamat17.DetailArrayOfРегистрХран members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type РегистрХран by index.
        /// </summary>
        /// <summary>
        /// Adds object with type РегистрХран.
        /// </summary>
        public DetailArrayOfРегистрХран(IIS.Postamat17.Постамат fПостамат) : 
                base(typeof(РегистрХран), ((ICSSoft.STORMNET.DataObject)(fПостамат)))
        {
        }
        
        public IIS.Postamat17.РегистрХран this[int index]
        {
            get
            {
                return ((IIS.Postamat17.РегистрХран)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Postamat17.РегистрХран dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
