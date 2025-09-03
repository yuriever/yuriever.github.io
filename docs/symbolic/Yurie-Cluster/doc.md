# [Yurie/Cluster](https://github.com/yuriever/Yurie-Cluster)

A Mathematica paclet for implementing a specific form of class composition.

!!! wl "Static"

    ``` mermaid
    flowchart LR

    PlanetCommonData(PlanetCommonData)
    PlanetMergeData(PlanetMergeData)

    StarList(StarList)
    StarData(StarData)

    starDefine{{starDefine}}
    starReset{{starReset}}
    starUnset{{starUnset}}
    starMerge{{starMerge}}
    starChange{{starChange}}

    PlanetCommonData --- starDefine --> StarList & StarData

    PlanetCommonData --- starReset --> StarData

    starUnset --> StarList & StarData

    PlanetMergeData --- starMerge --> StarData

    starChange --> StarData

    linkStyle 1,5 stroke:red;
    linkStyle 2,4,6,8,9 stroke:blue;
    linkStyle 0,3,7 stroke:green;

    classDef data fill:#f3e9ff;
    class PlanetCommonData,PlanetMergeData,StarList,StarData data;
    ```

!!! wl "Dynamic"

    ``` mermaid
    flowchart LR

    PlanetExtraData(PlanetExtraData)
    StarDefaultList(StarDefaultList)
    StarDefaultData(StarDefaultData)

    starDefault{{starDefault}}
    starUnset{{starUnset}}
    starRMC{{starReset/starMerge/starChange}}
    starUpdateDefault[[starUpdateDefault]]
    starUpdateDefaultWhenUnset[[starUpdateDefaultWhenUnset]]

    starDefault --> StarDefaultList

    starDefault & starUnset & starRMC --- starUpdateDefault --> StarDefaultData

    PlanetExtraData & StarDefaultList --- starUpdateDefault

    starUnset --- starUpdateDefaultWhenUnset --> StarDefaultList

    linkStyle 1,2,3 stroke:red;
    linkStyle 0,6,7,8 stroke:blue;
    linkStyle 5 stroke:green;

    classDef data fill:#f3e9ff;
    class PlanetExtraData,StarDefaultList,StarDefaultData data;
    ```

## Attributes

* `#!wl cluster[data_Association]` - store the data with the following keys:

    * `#!wl "ClusterName"` - name of cluster.

    * `#!wl "PlanetList"` - list of planets.

    * `#!wl "PlanetCommonData"` - common data of planets across stars, determining the behaviors of `#!wl starDefine` and `#!wl starReset`.

    * `#!wl "PlanetExtraData"` - extra data of planets, contributing to `#!wl "StarDefaultData"`.

    * `#!wl "PlanetMergeData"` - core of method `#!wl starMerge`, determining how to merge stars into the default star.

    * `#!wl "StarList"` - list of stars.

    * `#!wl "StarData"` - data of stars.

    * `#!wl "StarDefaultList"` - list of stars contributing to the default, changed by `#!wl starDefault` and `#!wl starUnset`, determining which part of `#!wl "StarData"` contributing to `#!wl "StarDefaultData"`.

    * `#!wl "StarDefaultData"` - data of default star. After star operations the default data will be updated automatically.

## Methods

### Cluster constructors

* `#!wl clusterQ[cluster_]` - check whether the input is a cluster.

* `#!wl clusterInit[{clusterName_,context_},planetList_,commonList_,extraList_,mergeList_]` - initiate the cluster and bind it to the symbol ``#!wl context`clusterName``. The arguments are the name of cluster with context, then names, common values, extra values and merge methods of planets.

* `#!wl clusterGet[cluster_,propertyOrItsList_]` - get property of the cluster.

* `#!wl clusterSet[cluster_,propertyOrItsList_]` - set property of the cluster.

### Public methods

* `#!wl starDefine[cluster_,starList_]` - define the stars.

* `#!wl starDefault[cluster_,starList_]` - set the stars to default.

* `#!wl starReset[cluster_,starList_]` - reset the stars.

* `#!wl starUnset[cluster_,starList_]` - unset the stars, and update the default star list.

* `#!wl starMerge[cluster_,starList_,planetData_]` - merge planet data to the stars. The third argument will be association-ized, hence rule, list of rules, association of rules are accepted.

* `#!wl starChange[cluster_,starList_,planetData_,planetFunctionData_]` - change planet data to the stars by the functions.

### Private methods

* `#!wl starDefineSplit[cluster_,starList_]` - split the list of stars into defined and undefined.

* `#!wl starDefineCheck[__]` - check the input before calling public methods:

    * `#!wl starDefineCheck[cluster_,"StarReportUndefAndReturnDef",starList_]`

    * `#!wl starDefineCheck[cluster_,"StarReportDefAndReturnUndef",starList_]`

    * `#!wl starDefineCheck[cluster_,"PlanetThrowUndef",starList_]`

* `#!wl starUpdateDefault[cluster_]` - update `#!wl "StarDefaultData"` by `#!wl "StarDefaultList"` after `#!wl starDefault`, `#!wl starReset`, `#!wl starUnset`, `#!wl starMerge` and `#!wl starChange`.

* `#!wl starUpdateDefaultWhenUnset[cluster_,starList_]` - remove the stars in both the input and the default star list, used by `#!wl starUnset`.

* `#!wl starPreIntercept|starPostIntercept` - modify the behaviors of star methods.
